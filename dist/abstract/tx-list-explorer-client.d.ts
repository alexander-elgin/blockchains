import type { AxiosResponse } from 'axios';
import type ExplorerRequestAdapter from './explorer/request-adapter.js';
import type TxExplorerResponseParser from './explorer/tx-list-response-parser.js';
import type { BlockchainClient, BlockchainClientResponse, TxListPaginationParser } from './types.js';
import type { ContractInfo, TxListOptions } from '../types.js';
export default class TxListExplorerClient implements BlockchainClient {
    private readonly parsePagination;
    private readonly parser;
    private readonly requestAdapter;
    constructor(explorer: ExplorerRequestAdapter, parser: TxExplorerResponseParser, parsePagination: TxListPaginationParser);
    protected fetch(address: string, contract?: ContractInfo, options?: TxListOptions): Promise<AxiosResponse>;
    getData(address: string, contract?: ContractInfo, options?: TxListOptions): BlockchainClientResponse;
    getAllowedLimit(limit: number): number;
}
//# sourceMappingURL=tx-list-explorer-client.d.ts.map