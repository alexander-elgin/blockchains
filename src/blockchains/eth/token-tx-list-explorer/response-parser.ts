import Tx from '../../../tx.js';
import TxListExplorerResponseParser from '../../../abstract/explorer/tx-list-response-parser.js';

import type { EtherscanTx, EtherscanResponse } from './types.js';

export default class EtherscanTokenTxListExplorerResponseParser extends TxListExplorerResponseParser {
    parseList(res: EtherscanResponse): Array<EtherscanTx> {
        if (res.status !== '1') {
            throw new Error(res.message);
        }

        return res.result;
    }

    parseItem(tx: EtherscanTx): Tx {
        return new Tx({
            amount: tx.value,
            from: tx.from,
            id: tx.hash,
            timestamp: new Date(parseInt(tx.timeStamp, 10) * 1000),
            to: tx.to,
        });
    }
}
