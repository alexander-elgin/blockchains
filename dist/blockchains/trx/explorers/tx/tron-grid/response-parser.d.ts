import Tx from '../../../../../tx.js';
import TxListExplorerResponseParser from '../../../../../abstract/explorer/response-parser/tx.js';
import type { TronGridTxListResponse, TronGridTxRecord } from './types.js';
export default class TronScanBalanceExplorerResponseParser extends TxListExplorerResponseParser {
    parseList(res: TronGridTxListResponse): TronGridTxRecord[];
    parseItem(tx: TronGridTxRecord): Tx;
}
//# sourceMappingURL=response-parser.d.ts.map