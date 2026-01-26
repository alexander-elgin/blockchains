import type { BalanceRawValue } from '../abstract/explorer/types.js';
import type { ContractInfo } from '../abstract/types.js';
import type Tx from '../tx.js';
export interface BalanceClient {
    getData(address: string): Promise<BalanceRawValue>;
}
export interface TxListClient {
    getData(address: string, contract?: ContractInfo): Promise<Array<Tx>>;
}
//# sourceMappingURL=types.d.ts.map