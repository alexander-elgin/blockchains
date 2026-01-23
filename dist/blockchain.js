import { toNumberByDecimals } from './utils/conversion.js';
export default class Blockchain {
    balanceClient;
    constructor(balanceClient) {
        this.balanceClient = balanceClient;
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
}
//# sourceMappingURL=blockchain.js.map