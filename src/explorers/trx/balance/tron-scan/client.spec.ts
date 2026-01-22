import { beforeAll, describe, expect, it, } from '@jest/globals';

import { BalanceExplorerClient } from '../../../../clients/balance.js';
import TronScanBalanceExplorerRequestAdapter from './request-adapter.js';
import TronScanBalanceParser from './parser.js';

describe.skip('TronScan Balance Client', () => {
    let client: BalanceExplorerClient;

    beforeAll(() => {
        client = new BalanceExplorerClient(new TronScanBalanceExplorerRequestAdapter(
            'https://apilist.tronscan.org/api'), new TronScanBalanceParser());
    });

    describe('.getData', () => {
        it('returns the account raw balance', async () => {
            const balance = await client.getData('TP1iaqTLzC2FNqsWX9t9m9SUdhAYD7hpKD');
            expect(balance).toEqual('33118299');
        });
    });
});
