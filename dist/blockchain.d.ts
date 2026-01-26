import type Tx from './tx.js';
import type { BalanceRawValue } from './abstract/explorer/types.js';
import type { ContractInfo } from './abstract/types.js';
import type { BalanceClient, TxListClient } from './clients/types.js';
export default class Blockchain {
    private readonly balanceClient;
    private readonly txClient;
    constructor(balanceClient: BalanceClient, txClient: TxListClient);
    getBalance(address: string): Promise<BalanceRawValue>;
    getBigIntBalance(address: string): Promise<bigint>;
    getRealBalance(address: string, decimalsNumber: number): Promise<number>;
    getTxs(address: string, contract?: ContractInfo): Promise<Array<Tx>>;
}
//# sourceMappingURL=blockchain.d.ts.map