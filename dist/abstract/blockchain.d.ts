import type Tx from '../tx.js';
import type { ContractInfo } from './types.js';
export default interface Blockchain {
    createTx(tx: Tx, contractInfo?: ContractInfo): Promise<any>;
    signTx(unsignedTransaction: any, privateKey: string): Promise<any>;
}
//# sourceMappingURL=blockchain.d.ts.map