export function getCreateTxUrl(tx, contract) {
    return `ethereum:${contract.address}@1/transfer?address=${tx.to}&uint256=${tx.amount}`;
}
//# sourceMappingURL=index.js.map