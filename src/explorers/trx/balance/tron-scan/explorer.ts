import Explorer from '../../../../abstract/explorer.js';
import type { ExplorerRequestDataField } from '../../../../abstract/types.js';

export default class TronScanBalanceExplorer extends Explorer {
    getData(address: string): Record<string, ExplorerRequestDataField> {
        return { address }
    }

    protected getUri(): string {
        return '/account';
    }
}
