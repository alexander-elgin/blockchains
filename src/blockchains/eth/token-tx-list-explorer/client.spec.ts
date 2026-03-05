import { beforeAll, describe, expect, it, } from '@jest/globals';

import TxListExplorerClient from '../../../abstract/tx-list-explorer-client.js';
import {Sorting} from '../../../abstract/types.js';
import EtherscanTokenTxListExplorerRequestAdapter from './request-adapter.js';
import EtherscanTokenTxListExplorerResponseParser from './response-parser.js';

describe.skip('Etherscan Token Tx List Client', () => {
    let client: TxListExplorerClient;

    beforeAll(() => {
        const API_KEY = '';

        client = new TxListExplorerClient(
            new EtherscanTokenTxListExplorerRequestAdapter('https://api.etherscan.io', API_KEY),
            new EtherscanTokenTxListExplorerResponseParser());
    });

    describe('.getTxs', () => {
        it('returns the account txs', async () => {
            const txs = await client.getData('0xd3B4eCCe0c09077280E361A7E4c5c85490C2E4Ed', {
                address: '0xdAC17F958D2ee523a2206206994597C13D831ec7',
                type: 'erc20',
            }, { sorting: Sorting.ASC });
            console.log(txs);
            expect(true).toBeTruthy();
        });
    });
});
