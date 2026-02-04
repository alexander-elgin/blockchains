import Tx from '../../../tx.js';
import TxListExplorerResponseParser from '../../../abstract/explorer/tx-list-response-parser.js';

import type { TronGridTokenTxListResponse, TronGridTokenTxRecord } from './types.js';

export default class TronScanBalanceExplorerResponseParser extends TxListExplorerResponseParser {
    parseList(res: TronGridTokenTxListResponse) {
        return res.data.filter(tx => tx.type.toLowerCase() === 'transfer');
    }

    parseItem(tx: TronGridTokenTxRecord) {
        return new Tx({
            amount: tx.value,
            from: tx.from,
            id: tx.transaction_id,
            timestamp: new Date(tx.block_timestamp),
            to: tx.to,
        });
    }
}
