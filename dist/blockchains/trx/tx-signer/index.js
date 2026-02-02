export default class TronTxSigner {
    network;
    constructor(network) {
        this.network = network;
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    async signTx(unsignedTransaction, privateKey) {
        return await this.network.trx.sign(unsignedTransaction, privateKey);
    }
}
//# sourceMappingURL=index.js.map