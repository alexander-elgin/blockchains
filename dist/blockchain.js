import { BalanceExplorerGeneralClient } from './clients/explorer/balance.js';
import { toNumberByDecimals } from './utils/conversion.js';
export default class Blockchain {
    balanceClient;
    decimalsNumber;
    constructor(balanceClient, decimalsNumber) {
        this.balanceClient = balanceClient;
        this.decimalsNumber = decimalsNumber;
    }
    async getBalance(address) {
        return await this.balanceClient.getData(address);
    }
    async getBigIntBalance(address) {
        const res = await this.getBalance(address);
        return BigInt(res ?? '-1');
    }
    async getRealBalance(address) {
        return toNumberByDecimals(await this.getBigIntBalance(address), this.decimalsNumber);
    }
}
//# sourceMappingURL=blockchain.js.map