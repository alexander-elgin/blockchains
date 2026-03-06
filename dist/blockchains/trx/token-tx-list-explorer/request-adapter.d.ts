import ExplorerRequestAdapter from '../../../abstract/explorer/request-adapter.js';
import type { ContractInfo, TxListOptions } from '../../../types.js';
export default class TronGridTokenTxListExplorerRequestAdapter extends ExplorerRequestAdapter {
    constructor(baseUrl: string);
    getData(address: string, contract: ContractInfo, options: TxListOptions): {
        contract_address: string;
        limit: number;
        only_confirmed: boolean;
        order_by: string;
        fingerprint: string;
    };
    protected getUri(address: string, contract: ContractInfo): string;
}
//# sourceMappingURL=request-adapter.d.ts.map