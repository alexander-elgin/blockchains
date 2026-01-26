import Tx from '../../../../../tx.js';
import TxListExplorerResponseParser from '../../../../../abstract/explorer/response-parser/tx.js';
export default class TronScanBalanceExplorerResponseParser extends TxListExplorerResponseParser {
    parseList(res) {
        return res.data.filter(tx => tx.type.toLowerCase() === 'transfer');
    }
    parseItem(tx) {
        return new Tx({
            amount: tx.value,
            from: tx.from,
            id: tx.transaction_id,
            timestamp: new Date(tx.block_timestamp),
            to: tx.to,
        });
    }
}
//# sourceMappingURL=response-parser.js.map