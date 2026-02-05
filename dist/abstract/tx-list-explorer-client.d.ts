import type { AxiosResponse } from 'axios';
import type ExplorerRequestAdapter from './explorer/request-adapter.js';
import type TxExplorerResponseParser from './explorer/tx-list-response-parser.js';
import type { BlockchainClient, ContractInfo } from './types.js';
import type Tx from '../tx.js';
export default class TxListExplorerClient implements BlockchainClient {
    private readonly parser;
    private readonly requestAdapter;
    constructor(explorer: ExplorerRequestAdapter, parser: TxExplorerResponseParser);
    protected fetch(address: string, contract?: ContractInfo): Promise<AxiosResponse>;
    getData(address: string, contract?: ContractInfo): Promise<Array<Tx>>;
}
//# sourceMappingURL=tx-list-explorer-client.d.ts.map