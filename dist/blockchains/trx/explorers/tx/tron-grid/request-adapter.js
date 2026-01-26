import ExplorerRequestAdapter from '../../../../../abstract/explorer/request-adapter.js';
const MAX_ALLOWED_TXS_NUMBER_PER_REQUEST = 200;
export default class TronGridTxListExplorerRequestAdapter extends ExplorerRequestAdapter {
    getData() {
        return { limit: MAX_ALLOWED_TXS_NUMBER_PER_REQUEST, only_confirmed: true };
    }
    getUri(address) {
        return `/accounts/${address}/transactions`;
    }
}
//# sourceMappingURL=request-adapter.js.map