import { TronWeb } from 'tronweb';
import TronTokenTxCreator from './token-tx-creator/index.js';
import TronTxCreator from './tx-creator/index.js';
import TronTxSigner from './tx-signer/index.js';
export default class TrxBlockchain {
    tokenTxCreator;
    txCreator;
    signer;
    constructor(explorerUrl) {
        const tronWeb = new TronWeb({ fullHost: explorerUrl });
        this.tokenTxCreator = new TronTokenTxCreator(tronWeb);
        this.txCreator = new TronTxCreator(tronWeb);
        this.signer = new TronTxSigner(tronWeb);
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    async createTx(tx, contract) {
        return await (contract === undefined ? this.txCreator.createTx(tx) : this.tokenTxCreator.createTx(tx, contract));
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    async signTx(unsignedTransaction, privateKey) {
        return await this.signer.signTx(unsignedTransaction, privateKey);
    }
}
//# sourceMappingURL=index.js.map