import type Tx from './tx.js';
import type { BalanceRawValue } from './abstract/explorer/types.js';
import type { BalanceExplorerGeneralClient } from './clients/explorer/balance.js';
import type { TxListExplorerGeneralClient } from './clients/explorer/tx.js';
export default class Blockchain {
    private readonly balanceClient;
    private readonly txClient;
    constructor(balanceClient: BalanceExplorerGeneralClient, txClient: TxListExplorerGeneralClient);
    getBalance(address: string): Promise<BalanceRawValue> | never;
    getBigIntBalance(address: string): Promise<bigint>;
    getRealBalance(address: string, decimalsNumber: number): Promise<number>;
    getTxs(address: string): Promise<Array<Tx>> | never;
}
//# sourceMappingURL=blockchain.d.ts.map