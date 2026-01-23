import type { BalanceRawValue } from './abstract/explorer/types.js';
import type { BalanceExplorerGeneralClient } from './clients/explorer/balance.js';
export default class Blockchain {
    private readonly balanceClient;
    constructor(balanceClient: BalanceExplorerGeneralClient);
    getBalance(address: string): Promise<BalanceRawValue> | never;
    getBigIntBalance(address: string): Promise<bigint>;
    getRealBalance(address: string, decimalsNumber: number): Promise<number>;
}
//# sourceMappingURL=blockchain.d.ts.map