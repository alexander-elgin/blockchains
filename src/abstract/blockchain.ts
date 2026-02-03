import type Tx from '../tx.js';
import type { ContractInfo } from './types.js';

export default interface Blockchain {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    createTx(tx: Tx, contractInfo?: ContractInfo): Promise<any>;
    isAddressValid(address: string): boolean;
    isTxAccepted(txId: string, contract?: ContractInfo): Promise<boolean>;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    signTx(unsignedTransaction: any, privateKey: string): Promise<any>;
}
