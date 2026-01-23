import { BalanceExplorerGeneralClient } from './clients/explorer/balance.js';
import type { BalanceRawValue } from './abstract/explorer/types.js';
export default class Blockchain {
    private readonly balanceClient;
    private readonly decimalsNumber;
    constructor(balanceClient: BalanceExplorerGeneralClient, decimalsNumber: number);
    getBalance(address: string): Promise<BalanceRawValue> | never;
    getBigIntBalance(address: string): Promise<bigint>;
    getRealBalance(address: string): Promise<number>;
}
//# sourceMappingURL=blockchain.d.ts.map