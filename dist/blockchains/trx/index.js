import { TronWeb } from 'tronweb';
import Blockchain from '../../abstract/blockchain.js';
import TxListExplorerClient from '../../abstract/tx-list-explorer-client.js';
import TronGridTokenTxListExplorerRequestAdapter from './token-tx-list-explorer/request-adapter.js';
import TronGridTokenTxListExplorerResponseParser from './token-tx-list-explorer/response-parser.js';
import TronTokenTxCreator from './token-tx-creator/index.js';
import TronTxCreator from './tx-creator/index.js';
import TronTxSigner from './tx-signer/index.js';
import { getSignTxUrl, isAddressActive, isAddressValid } from './utils/index.js';
export default class TrxBlockchain extends Blockchain {
    network;
    tokenTxCreator;
    txCreator;
    signer;
    constructor(explorerUrl) {
        super(new TxListExplorerClient(new TronGridTokenTxListExplorerRequestAdapter(explorerUrl), new TronGridTokenTxListExplorerResponseParser()));
        this.network = new TronWeb({ fullHost: explorerUrl });
        this.tokenTxCreator = new TronTokenTxCreator(this.network);
        this.txCreator = new TronTxCreator(this.network);
        this.signer = new TronTxSigner(this.network);
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    async createTokenTx(tx, contract) {
        return await this.tokenTxCreator.createTx(tx, contract);
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    async createTx(tx) {
        return await this.txCreator.createTx(tx);
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
    async signTx(unsignedTransaction, privateKey) {
        return await this.signer.signTx(unsignedTransaction, privateKey);
    }
}
//# sourceMappingURL=index.js.map