import { beforeAll, describe, expect, it, } from '@jest/globals';

import TronScanBalanceExplorer from './tron-scan-explorer.js';

describe('TronScanBalanceExplorer', () => {
    let baseUrl: string;
    let explorer: TronScanBalanceExplorer;

    beforeAll(() => {
        baseUrl = 'https://apilist.tronscanapi.com/api';
        explorer = new TronScanBalanceExplorer(baseUrl);
    });

    describe('.getUrl', () => {
        it('returns the endpoint full URL', () => {
            expect(explorer.getUrl()).toEqual(`${baseUrl}/accountv2`);
        });
    });
});
