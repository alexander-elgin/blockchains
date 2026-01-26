import ExplorerClient from './general.js';
import type ExplorerRequestAdapter from '../../abstract/explorer/request-adapter.js';
import type TxExplorerResponseParser from '../../abstract/explorer/response-parser/tx.js';
import type { ContractInfo } from '../../abstract/types.js';
import type Tx from '../../tx.js';
export default class TxListExplorerClient extends ExplorerClient {
    private readonly parser;
    constructor(explorer: ExplorerRequestAdapter, parser: TxExplorerResponseParser);
    getData(address: string, contract?: ContractInfo): Promise<Array<Tx>>;
}
//# sourceMappingURL=tx.d.ts.map