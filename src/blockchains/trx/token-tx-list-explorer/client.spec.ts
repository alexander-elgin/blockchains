import { beforeAll, describe, expect, it, } from '@jest/globals';

import TxListExplorerClient from '../../../abstract/tx-list-explorer-client.js';
import TronGridTokenTxListExplorerRequestAdapter from './request-adapter.js';
import TronGridTokenTxListExplorerResponseParser from './response-parser.js';

describe.skip('TronGrid Tx List Token Client', () => {
    let client: TxListExplorerClient;

    beforeAll(() => {
        client = new TxListExplorerClient(
            new TronGridTokenTxListExplorerRequestAdapter('https://api.trongrid.io'),
            new TronGridTokenTxListExplorerResponseParser());
    });

    describe('.getTxs', () => {
        it('returns the account txs', async () => {
            const txs = await client.getData('TFRFm2xTo4iwZZdnnxUoQSGWG3snt9GdqH', {
                address: 'TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t',
                type: 'trc20',
            });
            console.log(txs);
            expect(true).toBeTruthy();
        });
    });
});
