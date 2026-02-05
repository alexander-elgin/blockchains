import Tx from '../../../tx.js';
import TxListExplorerResponseParser from '../../../abstract/explorer/tx-list-response-parser.js';
import type { TronGridTokenTxListResponse, TronGridTokenTxRecord } from './types.js';
export default class TronScanBalanceExplorerResponseParser extends TxListExplorerResponseParser {
    parseList(res: TronGridTokenTxListResponse): TronGridTokenTxRecord[];
    parseItem(tx: TronGridTokenTxRecord): Tx;
}
//# sourceMappingURL=response-parser.d.ts.map