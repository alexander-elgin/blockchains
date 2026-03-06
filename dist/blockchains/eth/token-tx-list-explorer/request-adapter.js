import ExplorerRequestAdapter from '../../../abstract/explorer/request-adapter.js';
import { Sorting } from "../../../types.js";
export default class EtherscanTokenTxListExplorerRequestAdapter extends ExplorerRequestAdapter {
    apiKey;
    constructor(baseUrl, apiKey) {
        super(baseUrl, 1000);
        this.apiKey = apiKey;
    }
    getData(address, contract, options) {
        return {
            chainid: 1,
            module: 'account',
            action: 'tokentx',
            address: address,
            startblock: 0,
            endblock: 99999999,
            sort: options?.sorting === Sorting.ASC ? 'asc' : 'desc',
            contractaddress: contract.address,
            offset: this.getAllowedLimit(options.pagination.limit),
            page: options.pagination.page ?? 1,
            apikey: this.apiKey,
        };
    }
    getUri() {
        return `/v2/api`;
    }
}
//# sourceMappingURL=request-adapter.js.map