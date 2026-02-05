import Blockchain from '../../abstract/blockchain.js';
import TxListExplorerClient from '../../abstract/tx-list-explorer-client.js';
import EtherscanTokenTxListExplorerRequestAdapter from './token-tx-list-explorer/request-adapter.js';
import EtherscanTokenTxListExplorerResponseParser from './token-tx-list-explorer/response-parser.js';
import { getCreateTxUrl } from './utils/index.js';
export default class EthBlockchain extends Blockchain {
    constructor(explorerUrl, apiKey) {
        super(new TxListExplorerClient(new EtherscanTokenTxListExplorerRequestAdapter(explorerUrl, apiKey), new EtherscanTokenTxListExplorerResponseParser()));
    }
    async getCreateTokenTxUrl(tx, contract) {
        return getCreateTxUrl(tx, contract);
    }
}
//# sourceMappingURL=index.js.map