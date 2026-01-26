import ExplorerRequestAdapter from '../../../../../abstract/explorer/request-adapter.js';
import type { ContractInfo } from '../../../../../abstract/types.js';
export default class TronGridTokenTxListExplorerRequestAdapter extends ExplorerRequestAdapter {
    getData(address: string, contract: ContractInfo): {
        contract_address: string;
        limit: number;
        only_confirmed: boolean;
    };
    protected getUri(address: string, contract: ContractInfo): string;
}
//# sourceMappingURL=request-adapter.d.ts.map