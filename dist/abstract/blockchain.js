import { getMatchedTxs } from './utils/index.js';
export default class Blockchain {
    txListClient;
    constructor(txListClient) {
        this.txListClient = txListClient;
    }
    getAllowedLimit(limit) {
        return this.txListClient.getAllowedLimit(limit);
    }
    async getTxs(address, contract) {
        return await this.txListClient.getData(address, contract);
    }
    async getMatchedTxs(ignored, targetTx, contract) {
        return getMatchedTxs(ignored, targetTx, (await this.txListClient.getData(targetTx.from, contract)).items);
    }
}
//# sourceMappingURL=blockchain.js.map