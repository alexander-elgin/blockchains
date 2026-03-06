import type Tx from '../tx.js';
import type { ContractInfo } from '../types.js';

export interface BlockchainClient {
    getData(address: string, contract?: ContractInfo): Promise<Array<Tx>>;
}
