import { isAddress, getAddress } from 'ethers';
export function isAddressValid(address) {
    if (!isAddress(address)) {
        return false;
    }
    try {
        getAddress(address);
        return true;
    }
    catch {
        return false;
    }
}
export function getCreateTxUrl(tx, contract) {
    return `ethereum:${contract.address}@1/transfer?address=${tx.to}&uint256=${tx.amount}`;
}
//# sourceMappingURL=index.js.map