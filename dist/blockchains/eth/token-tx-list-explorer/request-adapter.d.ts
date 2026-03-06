import ExplorerRequestAdapter from '../../../abstract/explorer/request-adapter.js';
import type { ContractInfo, TxListOptions } from '../../../types.js';
export default class EtherscanTokenTxListExplorerRequestAdapter extends ExplorerRequestAdapter {
    private readonly apiKey;
    constructor(baseUrl: string, apiKey: string);
    getData(address: string, contract: ContractInfo, options: TxListOptions): {
        chainid: number;
        module: string;
        action: string;
        address: string;
        startblock: number;
        endblock: number;
        sort: string;
        contractaddress: string;
        offset: number;
        page: number;
        apikey: string;
    };
    protected getUri(): string;
}
//# sourceMappingURL=request-adapter.d.ts.map