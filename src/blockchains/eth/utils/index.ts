import {isAddress, getAddress} from 'ethers';

import type Tx from "../../../tx.js";
import type {ContractInfo} from "../../../types.js";

export function isAddressValid(address: string): boolean {
    if (!isAddress(address)) {
        return false;
    }

    try {
        getAddress(address);
        return true
    } catch {
        return false;
    }
}

export function getCreateTxUrl(tx: Tx, contract: ContractInfo): string {
    return `ethereum:${contract.address}@1/transfer?address=${tx.to}&uint256=${tx.amount}`;
}
