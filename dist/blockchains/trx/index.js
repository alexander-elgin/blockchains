import { TronWeb } from 'tronweb';
import Blockchain from '../../abstract/blockchain.js';
import TxListExplorerClient from '../../abstract/tx-list-explorer-client.js';
import TronGridTokenTxListExplorerRequestAdapter from './token-tx-list-explorer/request-adapter.js';
import TronGridTokenTxListExplorerResponseParser from './token-tx-list-explorer/response-parser.js';
import { createTokenTx, createTx, getSignTxUrl, isAddressActive, isAddressValid, signTx } from './utils/index.js';
export default class TrxBlockchain extends Blockchain {
    network;
    constructor(explorerUrl) {
        super(new TxListExplorerClient(new TronGridTokenTxListExplorerRequestAdapter(explorerUrl), new TronGridTokenTxListExplorerResponseParser()));
        this.network = new TronWeb({ fullHost: explorerUrl });
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    async createTokenTx(tx, contract) {
        return await createTokenTx(this.network, tx, contract);
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    async createTx(tx) {
        return await createTx(this.network, tx);
    }
    async getCreateTokenTxUrl(tx, contract, callbackUrl = '') {
        return getSignTxUrl(await this.createTokenTx(tx, contract), callbackUrl);
    }
    async isAddressActive(address) {
        return await isAddressActive(this.network, address);
    }
    async isAddressValid(address) {
        return await isAddressValid(address);
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    async signTx(unsignedTx, privateKey) {
        return await signTx(this.network, unsignedTx, privateKey);
    }
}
//# sourceMappingURL=index.js.map