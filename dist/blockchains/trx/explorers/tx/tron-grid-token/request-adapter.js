import ExplorerRequestAdapter from '../../../../../abstract/explorer/request-adapter.js';
const MAX_ALLOWED_TXS_NUMBER_PER_REQUEST = 200;
export default class TronGridTokenTxListExplorerRequestAdapter extends ExplorerRequestAdapter {
    getData(address, contract) {
        return {
            contract_address: contract.address,
            limit: MAX_ALLOWED_TXS_NUMBER_PER_REQUEST,
            only_confirmed: true,
        };
    }
    getUri(address, contract) {
        return `/v1/accounts/${address}/transactions/${contract.type}`;
    }
}
//# sourceMappingURL=request-adapter.js.map