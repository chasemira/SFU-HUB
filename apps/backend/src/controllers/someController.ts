import type { Response } from 'express';
import type { OperationsRequest } from '../@types/helpers';
import someService from '../services/someService.js';

const getSome = async (
    req: OperationsRequest<'getSome'>,
    res: Response,
): Promise<void> => {
    const somes = await someService.getSomething(req.query);
    res.json(somes);
};

export default {
    getSome: getSome,
};
