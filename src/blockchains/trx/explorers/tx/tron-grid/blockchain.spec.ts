import { beforeAll, describe, expect, it, } from '@jest/globals';

import Blockchain from '../../../../../blockchain.js';
import { BalanceExplorerNullClient } from '../../../../../clients/explorer/balance.js';
import { TxListExplorerClient } from '../../../../../clients/explorer/tx.js';
import TronGridTxListExplorerRequestAdapter from './request-adapter.js';
import TronGridTxListExplorerResponseParser from './response-parser.js';

describe.skip('TronGrid Tx List Blockchain', () => {
    let blockchain: Blockchain;

    beforeAll(() => {
        blockchain = new Blockchain(new BalanceExplorerNullClient, new TxListExplorerClient(
            new TronGridTxListExplorerRequestAdapter('https://api.trongrid.io/v1'),
            new TronGridTxListExplorerResponseParser()));
    });

    describe('.getTxs', () => {
        it('returns the account txs', async () => {
            const txs = await blockchain.getTxs('TFRFm2xTo4iwZZdnnxUoQSGWG3snt9GdqH');
            console.log(txs);
            expect(true).toBeTruthy();
        });
    });
});
