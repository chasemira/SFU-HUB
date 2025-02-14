/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */

export interface paths {
    "/calendar/events": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get a feed of calendar events
         * @description Returns a calendar feed with a subset of the format of https://fullcalendar.io/docs/event-object
         */
        get: operations["getEvents"];
        put?: never;
        /**
         * Add a calendar event
         * @description Adds a calendar event of the format of https://fullcalendar.io/docs/event-object
         */
        post: operations["postEvent"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/dining/restaurants": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get all Restaurants
         * @description Retrieve a list of all Restaurants
         */
        get: operations["getRestaurants"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/resources": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get all resources
         * @description Retrieve a list of all resources
         */
        get: operations["getResources"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/transit": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get transit stops and schedules
         * @description Retrieve a list of transit stops and the scheduled arrival times for each route.
         */
        get: operations["getTransit"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
}
export type webhooks = Record<string, never>;
export interface components {
    schemas: {
        EventPost: {
            id?: string;
            allDay?: boolean;
            /** Format: date-time */
            start: string;
            /** Format: date-time */
            end: string;
            title: string;
            url?: string;
            color?: string;
            tags: string[];
        };
        Event: {
            id: string;
            allDay?: boolean;
            /** Format: date-time */
            start: string;
            /** Format: date-time */
            end: string;
            title: string;
            url?: string;
            color?: string;
            tags: string[];
        };
        Resource: {
            /** @description Unique identifier */
            id: string;
            /** @description Title of the resource */
            title: string;
            /** @description Description of the resource */
            description?: string;
            /** @description Link to the specific resource */
            link: string;
            /** @description Category of the resource */
            category: string;
        };
        Restaurants: {
            /** @description Unique identifier */
            id: string;
            /** @description Name of the dining option */
            name: string;
            /** @description URL to an image of the restaurant */
            image: string;
            /** @description Address of the dining location */
            address: string;
            /** @description Location of the restaurant relative to sfu */
            category: string;
            /** @description Contact information */
            contact: string;
            /** @description Description of the dining option */
            description: string;
            /** @description Website URL */
            website: string;
            /** @description Operating hours */
            hours: string;
            /** @description URL to the menu image or page */
            menu: string;
        };
        TransitStop: {
            /** @description Unique identifier for the transit stop. */
            stopNumber: string;
            /** @description Name of the transit stop. */
            stopName: string;
            /** @description List of scheduled stops at this transit stop. */
            stops: components["schemas"]["TransitRoute"][];
        };
        TransitRoute: {
            /** @description Destination of the transit route. */
            destination: string;
            /** @description Name of the transit route. */
            routeName: string;
            /** @description Code of the transit route. */
            routeCode: string;
            /** @description Scheduled arrival time as a Unix timestamp. */
            time: number;
        };
        Error: {
            /**
             * Format: int32
             * @description The HTTP status code
             */
            code: number;
            /** @description The error */
            message: string;
        };
        /** @description An HTTP Problem Details object, as defined in IETF RFC 7807 (https://tools.ietf.org/html/rfc7807). */
        Problem: {
            /** @description The details of the problem */
            detail?: string;
            /** @description The HTTP status code */
            status: number;
            /** @description The type of error (text) */
            title: string;
            /** @description The type of error (URL) */
            type?: string;
        };
    };
    responses: never;
    parameters: never;
    requestBodies: never;
    headers: never;
    pathItems: never;
}
export type $defs = Record<string, never>;
export interface operations {
    getEvents: {
        parameters: {
            query?: {
                /** @description Filters to events that start after this date */
                start?: string;
                /** @description Filters to events that end before this date */
                end?: string;
                /** @description Filters to events with any of the provided tags, comma delimited */
                tags?: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful operation */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Event"][];
                };
            };
            /** @description The request has failed. */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                    "application/problem+json": components["schemas"]["Problem"];
                };
            };
        };
    };
    postEvent: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description The event */
        requestBody: {
            content: {
                "application/json": components["schemas"]["EventPost"];
            };
        };
        responses: {
            /** @description Successful operation */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Event"][];
                };
            };
            /** @description The request has failed. */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                    "application/problem+json": components["schemas"]["Problem"];
                };
            };
        };
    };
    getRestaurants: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful operation */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Restaurants"][];
                };
            };
            /** @description The request has failed. */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                    "application/problem+json": components["schemas"]["Problem"];
                };
            };
        };
    };
    getResources: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful operation */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Resource"][];
                };
            };
            /** @description The request has failed. */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                    "application/problem+json": components["schemas"]["Problem"];
                };
            };
        };
    };
    getTransit: {
        parameters: {
            query: {
                /** @description Filter by stop number, comma delimited list */
                stopNumbers: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful operation */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["TransitStop"][];
                };
            };
            /** @description The request has failed. */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                    "application/problem+json": components["schemas"]["Problem"];
                };
            };
        };
    };
}
