import { TronWeb } from 'tronweb';
export default class TronTxHandler {
    tronWeb;
    constructor(explorerUrl) {
        this.tronWeb = new TronWeb({
            fullHost: explorerUrl,
        });
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    async createTx(tx) {
        this.tronWeb.setAddress(tx.from);
        return await this.tronWeb.transactionBuilder.sendTrx(tx.to, Number(tx.amount), tx.from);
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    async signTx(unsignedTransaction, privateKey) {
        return await this.tronWeb.trx.sign(unsignedTransaction, privateKey);
    }
}
//# sourceMappingURL=index.js.map