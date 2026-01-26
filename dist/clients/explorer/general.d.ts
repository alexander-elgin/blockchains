import type { AxiosResponse } from 'axios';
import BlockchainClient from '../../abstract/client.js';
import type ExplorerRequestAdapter from '../../abstract/explorer/request-adapter.js';
import type { ContractInfo } from '../../abstract/types.js';
export default abstract class ExplorerClient extends BlockchainClient {
    private readonly requestAdapter;
    constructor(explorer: ExplorerRequestAdapter);
    protected fetch(address: string, contract?: ContractInfo): Promise<AxiosResponse>;
}
//# sourceMappingURL=general.d.ts.map