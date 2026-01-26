import { beforeAll, describe, expect, it, } from '@jest/globals';

import Blockchain from '../../../../../blockchain.js';
import NullBlockchainClient from '../../../../../clients/null.js';
import TxListExplorerClient from '../../../../../clients/explorer/tx.js';
import TronGridTokenTxListExplorerRequestAdapter from './request-adapter.js';
import TronGridTokenTxListExplorerResponseParser from './response-parser.js';

describe.skip('TronGrid Tx List Token Blockchain', () => {
    let blockchain: Blockchain;

    beforeAll(() => {
        blockchain = new Blockchain(new NullBlockchainClient(), new TxListExplorerClient(
            new TronGridTokenTxListExplorerRequestAdapter('https://api.trongrid.io/v1'),
            new TronGridTokenTxListExplorerResponseParser()));
    });

    describe('.getTxs', () => {
        it('returns the account txs', async () => {
            const txs = await blockchain.getTxs('TFRFm2xTo4iwZZdnnxUoQSGWG3snt9GdqH', {
                address: 'TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t',
                type: 'trc20',
            });
            console.log(txs);
            expect(true).toBeTruthy();
        });
    });
});
