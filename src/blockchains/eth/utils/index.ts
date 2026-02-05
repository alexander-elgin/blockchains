import type Tx from "../../../tx.js";
import type {ContractInfo} from "../../../abstract/types.js";

export function getCreateTxUrl(tx: Tx, contract: ContractInfo): string {
  return `ethereum:${contract.address}@1/transfer?address=${tx.to}&uint256=${tx.amount}`;
}
