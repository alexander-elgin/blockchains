import { getMatchedTxs } from './utils/index.js';
export default class Blockchain {
    txListClient;
    constructor(txListClient) {
        this.txListClient = txListClient;
    }
    async getMatchedTxs(ignored, targetTx, contract) {
        return getMatchedTxs(ignored, targetTx, await this.txListClient.getData(targetTx.from, contract));
    }
}
//# sourceMappingURL=blockchain.js.map