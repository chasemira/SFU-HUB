// import { fetch } from 'undici';
// import GtfsRealtimeBindings from 'gtfs-realtime-bindings';
import { prisma } from '../repositories/prisma.js';
import { DAY, DAYS, DAYS_IN_WEEK, msToSeconds } from '../util/constants.js';

const getStatic = async (stops: string[]) => {
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDay() - 1);
    const yesterdayWeekday = yesterday.getDay() as 1;
    const todayWeekday = (yesterdayWeekday + (1 % DAYS_IN_WEEK)) as 1;
    const midnight = new Date();
    midnight.setHours(0, 0, 0); // set to the start of the day

    return (
        await prisma.bus_stops.findMany({
            where: {
                stopNumber: {
                    in: stops,
                },
                stops: {
                    some: {
                        time: {
                            gte: msToSeconds(Date.now() - midnight.getTime()),
                        },
                    },
                },
            },
            select: {
                stopNumber: true,
                stopName: true,
                stops: {
                    select: {
                        time: true,
                        trip: {
                            select: {
                                destination: true,
                                routeName: true,
                                routeCode: true,
                                tripId: true,
                                monday: true,
                                tuesday: true,
                                wednesday: true,
                                thursday: true,
                                friday: true,
                                saturday: true,
                                sunday: true,
                                serviceId: true,
                            },
                        },
                    },
                },
            },
        })
    ).map((item) => ({
        ...item,
        stops: item.stops
            .filter(
                (item2) => item2.trip[DAYS[todayWeekday]] === true
                    || item2.trip[DAYS[yesterdayWeekday]] === true,
            )
            .map(({ time, trip: { ...trip } }) => {
                const date = new Date(midnight);
                date.setSeconds(time);

                const stopsToAdd = [];

                // this is so that we can have trips that are at > 24:00:00, useful if its 1am

                if (trip[DAYS[yesterdayWeekday]]) {
                    stopsToAdd.push({
                        destination: trip.destination,
                        routeName: trip.routeName,
                        routeCode: trip.routeCode,
                        time: msToSeconds(date.getTime() - DAY),
                    });
                }

                if (trip[DAYS[todayWeekday]]) {
                    stopsToAdd.push({
                        destination: trip.destination,
                        routeName: trip.routeName,
                        routeCode: trip.routeCode,
                        time: msToSeconds(date.getTime()),
                    });
                }

                return stopsToAdd;
            })
            .flat()
            .filter((item2) => item2.time >= msToSeconds(Date.now()))
            .sort((item1, item2) => item1.time - item2.time),
    }));
};

// const getRealTime = async () => {
//     const response = await fetch(
//         'https://gtfsapi.translink.ca/v3/gtfsrealtime?apikey=YOUR_API_KEY',
//     );
//     const buffer = await response.arrayBuffer();
//     const feed = GtfsRealtimeBindings.transit_realtime.FeedMessage.decode(new Uint8Array(buffer));

//     const realTime = feed.entity
//         .map((entity) =>
//             entity.tripUpdate?.stopTimeUpdate?.map((stop) => {
//                 return {
//                     tripId: entity.tripUpdate?.trip.tripId,
//                     stopId: stop.stopId,
//                     delay: stop.arrival?.delay,
//                     time: Number(stop.arrival?.time),
//                     vehicle: entity?.tripUpdate?.vehicle?.label,
//                 };
//             }),
//         )
//         .flat()
//         .filter(
//             (event) =>
//                 typeof event === 'object' &&
//                 typeof event.delay === 'number' &&
//                 typeof event.stopId === 'string' &&
//                 typeof event.tripId === 'string' &&
//                 typeof event.time === 'number',
//         )
//         .reduce(
//             (accumulator, event) => {
//                 const { stopId, ...stopEvent } = event!;
//                 accumulator[stopId!] = accumulator[stopId!] ?? [];
//                 // @ts-ignore
//                 accumulator[stopId!]!.push(stopEvent!);
//                 return accumulator;
//             },
//             {} as {
//                 [key: string]: {
//                     delay: number;
//                     direction: number;
//                     routeId: string;
//                     time: number;
//                     tripId: string;
//                     vehicle: string;
//                 }[];
//             },
//         );
// };

const getTransit = async (stops: string[]) => {
    const staticData = await getStatic(stops);
    // const realTime = await getRealTime();

    // for (const stopCode in stops) {
    //     const scheduledRouteIndex = scheduled.findIndex((item) => item.stopCode === stopCode);

    //     if (realTime[stopCode] && scheduledRouteIndex !== -1) {
    //         const scheduledRoute = scheduled[scheduledRouteIndex]!;
    //         const realTimeData = realTime[stopCode];

    //         for (const trip of realTimeData) {
    //             const realTimeIndex = scheduledRoute.trips?.findIndex(
    //                 (item) => item.tripId === trip.tripId,
    //             );
    //             if (realTimeIndex && realTimeIndex !== -1) {
    //                 Object.assign(scheduledRoute.trips[realTimeIndex]!, trip);
    //             }
    //         }
    //     }
    // }

    return staticData;
};

export default {
    getTransit: getTransit,
};
