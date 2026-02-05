export function getMatchedTxs(ignored, targetTx, txs) {
    return txs.filter((tx) => tx.timestamp.getTime() > targetTx.timestamp.getTime() && !ignored.includes(tx.id)
        && targetTx.to === tx.to && tx.amount.toString() === targetTx.amount.toString());
}
//# sourceMappingURL=index.js.map