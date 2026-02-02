export default class TronTxCreator {
    network;
    constructor(network) {
        this.network = network;
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    async createTx(tx) {
        this.network.setAddress(tx.from);
        return await this.network.transactionBuilder.sendTrx(tx.to, Number(tx.amount), tx.from);
    }
}
//# sourceMappingURL=index.js.map