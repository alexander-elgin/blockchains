import { BalanceExplorerGeneralClient } from './clients/balance.js';

import type { BalanceRawValue } from './abstract/types.js';

export default class Blockchain {
    private readonly balanceClient: BalanceExplorerGeneralClient;

    constructor(balanceClient: BalanceExplorerGeneralClient) {
        this.balanceClient = balanceClient;
    }

    async getBalance(address: string): Promise<BalanceRawValue> | never {
        return await this.balanceClient.getData(address);
    }
}
