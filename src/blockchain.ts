import { toNumberByDecimals } from './utils/conversion.js';

import type { BalanceRawValue } from './abstract/explorer/types.js';
import type { BalanceExplorerGeneralClient } from './clients/explorer/balance.js';

export default class Blockchain {
    private readonly balanceClient: BalanceExplorerGeneralClient;

    constructor(balanceClient: BalanceExplorerGeneralClient) {
        this.balanceClient = balanceClient;
    }

    async getBalance(address: string): Promise<BalanceRawValue> | never {
        return await this.balanceClient.getData(address);
    }

    async getBigIntBalance(address: string): Promise<bigint> {
        const res = await this.getBalance(address);
        return BigInt(res ?? '-1');
    }

    async getRealBalance(address: string, decimalsNumber: number): Promise<number> {
        return toNumberByDecimals(await this.getBigIntBalance(address), decimalsNumber);
    }
}
