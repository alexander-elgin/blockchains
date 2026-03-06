import axios from 'axios';
import type { AxiosResponse } from 'axios';

import type ExplorerRequestAdapter from './explorer/request-adapter.js';
import type TxExplorerResponseParser from './explorer/tx-list-response-parser.js';
import type { TxListExplorerResponse } from './explorer/types.js';
import type { BlockchainClient, BlockchainClientResponse, TxListPaginationParser } from './types.js';
import type { ContractInfo, TxListOptions } from '../types.js';

export default class TxListExplorerClient implements BlockchainClient {
    private readonly parsePagination: TxListPaginationParser;
    private readonly parser: TxExplorerResponseParser;
    private readonly requestAdapter: ExplorerRequestAdapter;

    constructor(
        explorer: ExplorerRequestAdapter,
        parser: TxExplorerResponseParser,
        parsePagination: TxListPaginationParser
    ) {
        this.requestAdapter = explorer;
        this.parser = parser;
        this.parsePagination = parsePagination;
    }

    protected async fetch(address: string, contract?: ContractInfo, options?: TxListOptions): Promise<AxiosResponse> {
        const method = this.requestAdapter.getMethod();

        return await axios({
            url: this.requestAdapter.getUrl(address, contract),
            method,
            [method.toLowerCase() === 'get' ? 'params' : 'data']: this.requestAdapter.getData(address, contract, options),
        });
    }

    async getData(address: string, contract?: ContractInfo, options?: TxListOptions): BlockchainClientResponse {
        const { data } = await this.fetch(address, contract, options);

        return {
            items: this.parser.parse(<TxListExplorerResponse>data),
            pagination: this.parsePagination(options?.pagination ?? { limit: this.getAllowedLimit(0)}, data),
        };
    }

    getAllowedLimit(limit: number): number {
        return this.requestAdapter.getAllowedLimit(limit);
    }
}
