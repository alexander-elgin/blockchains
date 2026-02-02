import type Tx from '../tx.js';
import type { ContractInfo } from './types.js';

export default interface Blockchain {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    createTx(tx: Tx, contractInfo?: ContractInfo): Promise<any>;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    signTx(unsignedTransaction: any, privateKey: string): Promise<any>;
}
