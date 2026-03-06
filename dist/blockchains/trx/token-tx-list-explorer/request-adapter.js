import ExplorerRequestAdapter from '../../../abstract/explorer/request-adapter.js';
import { Sorting } from '../../../types.js';
export default class TronGridTokenTxListExplorerRequestAdapter extends ExplorerRequestAdapter {
    constructor(baseUrl) {
        super(baseUrl, 200);
    }
    getData(address, contract, options) {
        return {
            contract_address: contract.address,
            limit: this.getAllowedLimit(options.pagination.limit),
            only_confirmed: true,
            order_by: `block_timestamp,${options?.sorting === Sorting.ASC ? 'asc' : 'desc'}`,
            fingerprint: options.pagination.fingerprint ?? '',
        };
    }
    getUri(address, contract) {
        return `/v1/accounts/${address}/transactions/${contract.type}`;
    }
}
//# sourceMappingURL=request-adapter.js.map