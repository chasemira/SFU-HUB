import { OperationsRequest } from '../@types/helpers';
import { type components } from '../@types/openapi';
import { prisma } from '../repositories/prisma.js';

const getEvents = async (
    start: string | undefined,
    end: string | undefined,
): Promise<components['schemas']['Event'][]> => {
    const events = await prisma.event.findMany({
        where: {
            ...(typeof start !== 'undefined' ? { start: { gte: start } } : {}),
            ...(typeof end !== 'undefined' ? { end: { lte: end } } : {}),
        },
        select: {
            id: true,
            title: true,
            start: true,
            end: true,
            allDay: true,
            color: true,
            url: true,
        },
    });

    return events.map(({ allDay, url, color, ...event }) => ({
        ...event,
        start: event.start.toISOString(),
        end: event.end.toISOString(),
        ...(allDay != null ? { allDay: allDay } : {}),
        ...(url != null ? { url: url } : {}),
        ...(color != null ? { color: color } : {}),
    }));
};

const postEvent = async (
    event: OperationsRequest<'postEvent'>['body'],
): Promise<components['schemas']['Event']> => {
    const { allDay, url, color, ...createdEvent } = await prisma.event.create({
        data: {
            ...event,
        },
    });

    return {
        ...createdEvent,
        start: createdEvent.start.toISOString(),
        end: createdEvent.end.toISOString(),
        ...(allDay != null ? { allDay: allDay } : {}),
        ...(url != null ? { url: url } : {}),
        ...(color != null ? { color: color } : {}),
    };
};

export default {
    getEvents: getEvents,
    postEvent: postEvent,
};
