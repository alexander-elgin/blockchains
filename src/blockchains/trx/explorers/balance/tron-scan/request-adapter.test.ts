import { beforeAll, describe, expect, it, } from '@jest/globals';

import TronScanBalanceExplorerRequestAdapter from './request-adapter.js';

describe('TronScanBalanceExplorerRequestAdapter', () => {
    let baseUrl: string;
    let explorer: TronScanBalanceExplorerRequestAdapter;

    beforeAll(() => {
        baseUrl = 'https://apilist.tronscan.org/api';
        explorer = new TronScanBalanceExplorerRequestAdapter(baseUrl);
    });

    describe('.getUrl', () => {
        it('returns the endpoint full URL', () => {
            expect(explorer.getUrl()).toEqual(`${baseUrl}/account`);
        });
    });
});
