import { describe, expect, it, } from '@jest/globals';

import { toNumberByDecimals } from './conversion.js';

describe('toNumberByDecimals', () => {
    it('returns a real number', async () => {
        const balance = toNumberByDecimals(BigInt('33118299'), 6);
        expect(balance).toBeGreaterThan(33.11);
        expect(balance).toBeLessThan(33.12);
    });
});
