import type Tx from '../tx.js';
import type { ContractInfo, Pagination } from '../types.js';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type TxListPaginationParser = (pagination: Pagination, res?: any) => Pagination;

export type BlockchainClientResponse = Promise<{ items: Array<Tx>, pagination: Pagination }>;

export interface BlockchainClient {
    getData(address: string, contract?: ContractInfo): BlockchainClientResponse;
    getAllowedLimit(limit: number): number;
}
