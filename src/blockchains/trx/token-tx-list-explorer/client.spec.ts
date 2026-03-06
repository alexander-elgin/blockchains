import {beforeAll, describe, expect, it,} from '@jest/globals';

import TxListExplorerClient from '../../../abstract/tx-list-explorer-client.js';
import {Sorting} from '../../../types.js';
import TronGridTokenTxListExplorerRequestAdapter from './request-adapter.js';
import TronGridTokenTxListExplorerResponseParser from './response-parser.js';
import parsePagination from './parse-pagination.js';

describe.skip('TronGrid Tx List Token Client', () => {
    let client: TxListExplorerClient;

    beforeAll(() => {
        client = new TxListExplorerClient(
            new TronGridTokenTxListExplorerRequestAdapter('https://api.trongrid.io'),
            new TronGridTokenTxListExplorerResponseParser(), parsePagination);
    });

    describe('.getTxs', () => {
        it('returns the account txs', async () => {
            const txs = await client.getData('TFRFm2xTo4iwZZdnnxUoQSGWG3snt9GdqH', {
                address: 'TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t',
                type: 'trc20',
            }, { pagination: { limit: client.getAllowedLimit(5) }, sorting: Sorting.ASC });
            console.log(txs);
            expect(true).toBeTruthy();
        });
    });
});
