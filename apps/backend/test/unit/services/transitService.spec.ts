import { describe, expect, it } from 'vitest';
import transitService from '../../../src/services/transitService.js';

describe('services/transitService.ts', () => {
    describe('getTransit function', () => {
        it('should get transit information', async function () {
            const result = await transitService.getTransit(['52806', '61036']);
            // console.log(JSON.stringify(result, null, 4));
            expect(result.length).toBeGreaterThanOrEqual(1);
            expect(result[0].stops.length).toBeGreaterThan(0);
        });
    });
});
