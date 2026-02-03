import { TronWeb } from 'tronweb';
import TronTokenTxCreator from './token-tx-creator/index.js';
import TronTxAcceptanceValidator from './tx-acceptance-validator/index.js';
import TronTxCreator from './tx-creator/index.js';
import TronTxSigner from './tx-signer/index.js';
import { isAddressActive, isAddressValid } from './utils/index.js';
export default class TrxBlockchain {
    network;
    tokenTxCreator;
    txAcceptanceValidator;
    txCreator;
    signer;
    constructor(explorerUrl) {
        this.network = new TronWeb({ fullHost: explorerUrl });
        this.tokenTxCreator = new TronTokenTxCreator(this.network);
        this.txAcceptanceValidator = new TronTxAcceptanceValidator(this.network);
        this.txCreator = new TronTxCreator(this.network);
        this.signer = new TronTxSigner(this.network);
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    async createTx(tx, contract) {
        return await (contract === undefined ? this.txCreator.createTx(tx) : this.tokenTxCreator.createTx(tx, contract));
    }
    async isAddressActive(address) {
        return await isAddressActive(this.network, address);
    }
    isAddressValid(address) {
        return isAddressValid(address);
    }
    async isTxAccepted(txId, contract) {
        return await this.txAcceptanceValidator.isTxAccepted(txId, contract);
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    async signTx(unsignedTransaction, privateKey) {
        return await this.signer.signTx(unsignedTransaction, privateKey);
    }
}
//# sourceMappingURL=index.js.map