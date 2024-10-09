import { type components } from '../@types/openapi';
import { prisma } from '../repositories/prisma.js';

const getEvents = async (): Promise<components['schemas']['Dining'][]> => {
    const dining = await prisma.dining.findMany({
        select: {
            name: true,
            address: true,
            contact: true,
            description: true,
            website: true,
            hours: true,
        },
    });

    return dining as components['schemas']['Dining'][];
};

export default {
    getEvents: getEvents,
};