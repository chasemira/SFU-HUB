import type { Response } from 'express';
import type { OperationsRequest } from '../@types/helpers';
import calendarService from '../services/calendarService.js';

const getEvents = async (
    req: OperationsRequest<'getEvents'>,
    res: Response,
): Promise<void> => {
    const events = await calendarService.getEvents(req.query.start, req.query.end);
    res.json(events);
};

const postEvent = async (
    req: OperationsRequest<'postEvent'>,
    res: Response,
): Promise<void> => {
    const event = await calendarService.postEvent(req.body);
    res.json(event);
};

export default {
    getEvents: getEvents,
    postEvent: postEvent,
};
