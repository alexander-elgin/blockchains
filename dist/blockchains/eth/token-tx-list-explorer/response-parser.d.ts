import Tx from '../../../tx.js';
import TxListExplorerResponseParser from '../../../abstract/explorer/tx-list-response-parser.js';
import type { EtherscanTx, EtherscanResponse } from './types.js';
export default class EtherscanTokenTxListExplorerResponseParser extends TxListExplorerResponseParser {
    parseList(res: EtherscanResponse): Array<EtherscanTx>;
    parseItem(tx: EtherscanTx): Tx;
}
//# sourceMappingURL=response-parser.d.ts.map