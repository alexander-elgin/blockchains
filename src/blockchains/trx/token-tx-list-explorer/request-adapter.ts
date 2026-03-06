import ExplorerRequestAdapter from '../../../abstract/explorer/request-adapter.js';
import { Sorting } from '../../../types.js';

import type { ContractInfo, TxListOptions } from '../../../types.js';

export default class TronGridTokenTxListExplorerRequestAdapter extends ExplorerRequestAdapter {
    constructor(baseUrl: string) {
        super(baseUrl, 200);
    }

    getData(address: string, contract: ContractInfo, options: TxListOptions) {
        return {
            contract_address: contract.address,
            limit: this.getAllowedLimit(options.pagination.limit),
            only_confirmed: true,
            order_by: `block_timestamp,${options?.sorting === Sorting.ASC ? 'asc' : 'desc'}`,
            fingerprint: options.pagination.fingerprint ?? '',
        };
    }

    protected getUri(address: string, contract: ContractInfo): string {
        return `/v1/accounts/${address}/transactions/${contract.type}`;
    }
}
