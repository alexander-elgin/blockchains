import type Tx from '../../tx.js';

export function getMatchedTxs(ignored: Array<string>, targetTx: Tx, txs: Array<Tx>): Array<Tx> {
    return txs.filter((tx) => tx.timestamp.getTime() > targetTx.timestamp.getTime() && !ignored.includes(tx.id)
        && targetTx.to === tx.to && tx.amount.toString() === targetTx.amount.toString());
}
