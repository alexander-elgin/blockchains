import axios from 'axios';
import type { AxiosResponse } from 'axios';

import BlockchainClient from '../../abstract/client.js';

import type ExplorerRequestAdapter from '../../abstract/explorer/request-adapter.js';
import type { ContractInfo } from '../../abstract/types.js';

export default abstract class ExplorerClient extends BlockchainClient {
    private readonly requestAdapter: ExplorerRequestAdapter;

    constructor(explorer: ExplorerRequestAdapter) {
        super();
        this.requestAdapter = explorer;
    }

    protected async fetch(address: string, contract?: ContractInfo): Promise<AxiosResponse> {
        const method = this.requestAdapter.getMethod();

        return await axios({
            url: this.requestAdapter.getUrl(address, contract),
            method,
            [method.toLowerCase() === 'get' ? 'params' : 'data']: this.requestAdapter.getData(address, contract),
        });
    }
}
