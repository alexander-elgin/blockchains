export default class TronTxAcceptanceValidator {
    network;
    constructor(network) {
        this.network = network;
    }
    async isTxAccepted(txId, contract) {
        const { contractResult, receipt } = await this.network.trx.getTransactionInfo(txId);
        if (contract === undefined) {
            return receipt !== undefined;
        }
        return receipt?.result === 'SUCCESS' && contractResult?.length > 0 && (contractResult[0] ?? '').length > 0;
    }
}
//# sourceMappingURL=index.js.map