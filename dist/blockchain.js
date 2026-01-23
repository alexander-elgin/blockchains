import { toNumberByDecimals } from './utils/conversion.js';
export default class Blockchain {
    balanceClient;
    txClient;
    constructor(balanceClient, txClient) {
        this.balanceClient = balanceClient;
        this.txClient = txClient;
    }
    async getBalance(address) {
        return await this.balanceClient.getData(address);
    }
    async getBigIntBalance(address) {
        const res = await this.getBalance(address);
        return BigInt(res ?? '-1');
    }
    async getRealBalance(address, decimalsNumber) {
        return toNumberByDecimals(await this.getBigIntBalance(address), decimalsNumber);
    }
    async getTxs(address) {
        return await this.txClient.getData(address);
    }
}
//# sourceMappingURL=blockchain.js.map