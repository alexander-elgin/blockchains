import ExplorerRequestAdapter from '../../../../../abstract/explorer/request-adapter.js';
export default class TronScanBalanceExplorer extends ExplorerRequestAdapter {
    getData(address) {
        return { address };
    }
    getUri() {
        return '/account';
    }
}
//# sourceMappingURL=request-adapter.js.map