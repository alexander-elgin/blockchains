import ExplorerClient from '../../abstract/explorer/client.js';
import type ExplorerRequestAdapter from '../../abstract/explorer/request-adapter.js';
import type TxExplorerResponseParser from '../../abstract/explorer/response-parser/tx.js';
import type { ContractInfo } from '../../abstract/types.js';
import type Tx from '../../tx.js';
export declare abstract class TxListExplorerGeneralClient extends ExplorerClient {
    abstract getData(address: string, contract?: ContractInfo): Promise<Array<Tx>> | never;
}
export declare class TxListExplorerClient extends TxListExplorerGeneralClient {
    private readonly explorer;
    private readonly parser;
    constructor(explorer: ExplorerRequestAdapter, parser: TxExplorerResponseParser);
    getData(address: string, contract?: ContractInfo): Promise<Array<Tx>>;
}
export declare class TxListExplorerNullClient extends TxListExplorerGeneralClient {
    getData(): never;
}
//# sourceMappingURL=tx.d.ts.map