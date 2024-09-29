import { type components, type operations } from '../@types/openapi';

const getSomething = async (
    id: operations['getSome']['parameters']['path']['someId'],
): Promise<components['schemas']['Some']> => {
    const some = await (async () => ({
        id: id,
    }))();

    return some;
};

export default {
    getSomething: getSomething,
};
