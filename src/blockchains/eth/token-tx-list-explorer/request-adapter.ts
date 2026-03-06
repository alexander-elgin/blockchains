import ExplorerRequestAdapter from '../../../abstract/explorer/request-adapter.js';

import type { ContractInfo, TxListOptions } from '../../../types.js';
import {Sorting} from "../../../types.js";

export default class EtherscanTokenTxListExplorerRequestAdapter extends ExplorerRequestAdapter {
    private readonly apiKey: string;

    constructor(baseUrl: string, apiKey: string) {
        super(baseUrl);
        this.apiKey = apiKey;
    }

    getData(address: string, contract: ContractInfo, options: TxListOptions) {
        return {
            chainid: 1,
            module: 'account',
            action: 'tokentx',
            address: address,
            startblock: 0,
            endblock: 99999999,
            sort: options?.sorting === Sorting.ASC ? 'asc' : 'desc',
            contractaddress: contract.address,
            apikey: this.apiKey,
        };
    }

    protected getUri(): string {
        return `/v2/api`;
    }
}
