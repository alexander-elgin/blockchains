import type { ContractInfo } from '../abstract/types.js';
import type Tx from '../tx.js';

export interface TxListClient {
    getData(address: string, contract?: ContractInfo): Promise<Array<Tx>>;
}
