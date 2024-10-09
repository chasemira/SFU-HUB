import type { Response } from 'express';
import type { OperationsRequest } from '../@types/helpers';
import diningService from '../services/diningService';

const getResources = async (
    _req: OperationsRequest<'getResources'>,
    res: Response,
): Promise<void> => {
    // Calling the service
    const resources = await diningService.getEvents();

    res.status(200).json(resources);
};

export default {
    getResources: getResources,
};