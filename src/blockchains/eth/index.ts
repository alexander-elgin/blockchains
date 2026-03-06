import Blockchain from '../../abstract/blockchain.js';
import TxListExplorerClient from '../../abstract/tx-list-explorer-client.js';
import EtherscanTokenTxListExplorerRequestAdapter from './token-tx-list-explorer/request-adapter.js';
import EtherscanTokenTxListExplorerResponseParser from './token-tx-list-explorer/response-parser.js';
import parsePagination from './token-tx-list-explorer/parse-pagination.js';
import { getCreateTxUrl, isAddressValid } from './utils/index.js';

import type { AddressValidator, TxRouter } from '../../abstract/blockchain.js';
import type { ContractInfo } from '../../types.js';
import type Tx from '../../tx.js';

export default class EthBlockchain extends Blockchain implements AddressValidator, TxRouter {
    constructor(explorerUrl: string, apiKey: string) {
        super(new TxListExplorerClient(new EtherscanTokenTxListExplorerRequestAdapter(explorerUrl, apiKey),
            new EtherscanTokenTxListExplorerResponseParser(), parsePagination));
    }

    async getCreateTokenTxUrl(tx: Tx, contract: ContractInfo): Promise<string> {
        return getCreateTxUrl(tx, contract);
    }

    async isAddressActive(): Promise<boolean> {
        return true;
    }

    isAddressValid(address: string): boolean {
        return isAddressValid(address);
    }
}
