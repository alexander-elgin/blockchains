import ExplorerRequestAdapter from '../../../../../abstract/explorer/request-adapter.js';
export default class TronGridTxListExplorerRequestAdapter extends ExplorerRequestAdapter {
    getData(): {
        limit: number;
        only_confirmed: boolean;
    };
    protected getUri(address: string): string;
}
//# sourceMappingURL=request-adapter.d.ts.map