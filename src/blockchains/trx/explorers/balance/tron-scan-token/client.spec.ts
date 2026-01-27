import { beforeAll, describe, expect, it, } from '@jest/globals';

import BalanceExplorerClient from '../../../../../clients/explorer/balance.js';
import TronScanBalanceExplorerRequestAdapter from '../tron-scan/request-adapter.js';
import TronScanTokenBalanceExplorerResponseParser from './response-parser.js';

describe.skip('TronScan Token Balance Client', () => {
    let client: BalanceExplorerClient;

    beforeAll(() => {
        client = new BalanceExplorerClient(new TronScanBalanceExplorerRequestAdapter(
            'https://apilist.tronscan.org/api'), new TronScanTokenBalanceExplorerResponseParser());
    });

    describe('.getData', () => {
        it('returns the account raw balance', async () => {
            const USDC_TRC20_address = 'TEkxiTehnzSmSe2XqrBj4w32RUN966rdz8';
            const balance = await client.getData('TTWxjbzsMq8KpLFdvvt4hnDFK4vzCb18Vq', {
                address: USDC_TRC20_address,
                type: 'trc20',
            });
            expect(balance).toEqual('1790902');
        });
    });
});
