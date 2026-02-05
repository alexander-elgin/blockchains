import ExplorerRequestAdapter from '../../../abstract/explorer/request-adapter.js';
export default class EtherscanTokenTxListExplorerRequestAdapter extends ExplorerRequestAdapter {
    apiKey;
    constructor(baseUrl, apiKey) {
        super(baseUrl);
        this.apiKey = apiKey;
    }
    getData(address, contract) {
        return {
            chainid: 1,
            module: 'account',
            action: 'tokentx',
            address: address,
            startblock: 0,
            endblock: 99999999,
            sort: 'desc',
            contractaddress: contract.address,
            apikey: this.apiKey,
        };
    }
    getUri() {
        return `/v2/api`;
    }
}
//# sourceMappingURL=request-adapter.js.map