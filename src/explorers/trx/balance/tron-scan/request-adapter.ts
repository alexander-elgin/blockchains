import ExplorerRequestAdapter from '../../../../abstract/explorer/request-adapter.js';
import type { ExplorerRequestDataField } from '../../../../abstract/explorer/types.js';

export default class TronScanBalanceExplorer extends ExplorerRequestAdapter {
    getData(address: string): Record<string, ExplorerRequestDataField> {
        return { address }
    }

    protected getUri(): string {
        return '/account';
    }
}
