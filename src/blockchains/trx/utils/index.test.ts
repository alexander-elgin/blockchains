import { describe, expect, it, } from '@jest/globals';

import { getSignTxUrl } from './index.js';

describe('getSignTrxTxUrl', () => {
    it('returns a string', async () => {
        const url = getSignTxUrl({});
        expect(typeof url).toEqual('string');
    });
});
