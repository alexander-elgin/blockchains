import axios from 'axios';
import type { AxiosResponse } from 'axios';

import type ExplorerRequestAdapter from './explorer/request-adapter.js';
import type TxExplorerResponseParser from './explorer/tx-list-response-parser.js';
import type { TxListExplorerResponse } from './explorer/types.js';
import type { BlockchainClient } from './types.js';
import type { ContractInfo, TxListOptions } from '../types.js';
import type Tx from '../tx.js';

export default class TxListExplorerClient implements BlockchainClient {
    private readonly parser: TxExplorerResponseParser;
    private readonly requestAdapter: ExplorerRequestAdapter;

    constructor(explorer: ExplorerRequestAdapter, parser: TxExplorerResponseParser) {
        this.requestAdapter = explorer;
        this.parser = parser;
    }

    protected async fetch(address: string, contract?: ContractInfo, options?: TxListOptions): Promise<AxiosResponse> {
        const method = this.requestAdapter.getMethod();

        return await axios({
            url: this.requestAdapter.getUrl(address, contract),
            method,
            [method.toLowerCase() === 'get' ? 'params' : 'data']: this.requestAdapter.getData(address, contract, options),
        });
    }

    async getData(address: string, contract?: ContractInfo, options?: TxListOptions): Promise<Array<Tx>> {
        const { data } = await this.fetch(address, contract, options);
        return this.parser.parse(<TxListExplorerResponse>data);
    }
}
