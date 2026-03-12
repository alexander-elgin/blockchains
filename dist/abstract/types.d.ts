import type Tx from '../tx.js';
import type { ContractInfo, Pagination, TxListOptions } from '../types.js';
export type TxListPaginationParser = (pagination: Pagination, res?: any) => Pagination;
export type BlockchainClientResponse = Promise<{
    items: Array<Tx>;
    pagination: Pagination;
}>;
export interface BlockchainClient {
    getData(address: string, contract?: ContractInfo, options?: TxListOptions): BlockchainClientResponse;
    getAllowedLimit(limit: number): number;
}
//# sourceMappingURL=types.d.ts.map