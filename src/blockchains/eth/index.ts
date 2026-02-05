import Blockchain from '../../abstract/blockchain.js';
import TxListExplorerClient from '../../abstract/tx-list-explorer-client.js';
import EtherscanTokenTxListExplorerRequestAdapter from './token-tx-list-explorer/request-adapter.js';
import EtherscanTokenTxListExplorerResponseParser from './token-tx-list-explorer/response-parser.js';
import { getCreateTxUrl } from './utils/index.js';

import type { TxRouter } from '../../abstract/blockchain.js';
import type { ContractInfo } from '../../abstract/types.js';
import type Tx from '../../tx.js';

export default class EthBlockchain extends Blockchain implements TxRouter {
    constructor(explorerUrl: string, apiKey: string) {
        super(new TxListExplorerClient(new EtherscanTokenTxListExplorerRequestAdapter(explorerUrl, apiKey),
            new EtherscanTokenTxListExplorerResponseParser()));
    }

    async getCreateTokenTxUrl(tx: Tx, contract: ContractInfo): Promise<string> {
        return getCreateTxUrl(tx, contract);
    }
}
