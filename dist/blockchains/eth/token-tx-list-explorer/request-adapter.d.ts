import ExplorerRequestAdapter from '../../../abstract/explorer/request-adapter.js';
import type { ContractInfo } from '../../../abstract/types.js';
export default class EtherscanTokenTxListExplorerRequestAdapter extends ExplorerRequestAdapter {
    private readonly apiKey;
    constructor(baseUrl: string, apiKey: string);
    getData(address: string, contract: ContractInfo): {
        chainid: number;
        module: string;
        action: string;
        address: string;
        startblock: number;
        endblock: number;
        sort: string;
        contractaddress: string;
        apikey: string;
    };
    protected getUri(): string;
}
//# sourceMappingURL=request-adapter.d.ts.map