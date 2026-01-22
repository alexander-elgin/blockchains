import { BalanceExplorerGeneralClient } from './clients/explorer/balance.js';

import type { BalanceRawValue } from './abstract/explorer/types.js';

export default class Blockchain {
    private readonly balanceClient: BalanceExplorerGeneralClient;

    constructor(balanceClient: BalanceExplorerGeneralClient) {
        this.balanceClient = balanceClient;
    }

    async getBalance(address: string): Promise<BalanceRawValue> | never {
        return await this.balanceClient.getData(address);
    }
}
