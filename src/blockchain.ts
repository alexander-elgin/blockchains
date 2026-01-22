import { BalanceExplorerGeneralClient } from './clients/explorer/balance.js';
import { toNumberByDecimals } from './utils/conversion.js';

import type { BalanceRawValue } from './abstract/explorer/types.js';

export default class Blockchain {
    private readonly balanceClient: BalanceExplorerGeneralClient;
    private readonly decimalsNumber: number;

    constructor(balanceClient: BalanceExplorerGeneralClient, decimalsNumber: number) {
        this.balanceClient = balanceClient;
        this.decimalsNumber = decimalsNumber;
    }

    async getBalance(address: string): Promise<BalanceRawValue> | never {
        return await this.balanceClient.getData(address);
    }

    async getBigIntBalance(address: string): Promise<bigint> {
        const res = await this.getBalance(address);
        return BigInt(res ?? '-1');
    }

    async getRealBalance(address: string): Promise<number> {
        return toNumberByDecimals(await this.getBigIntBalance(address), this.decimalsNumber);
    }
}
