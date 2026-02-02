import type Blockchain from '../../abstract/blockchain.js';
import type { ContractInfo } from '../../abstract/types.js';
import type Tx from '../../tx.js';
export default class TrxBlockchain implements Blockchain {
    private readonly tokenTxCreator;
    private readonly txCreator;
    private readonly signer;
    constructor(explorerUrl: string);
    createTx(tx: Tx, contract?: ContractInfo): Promise<any>;
    signTx(unsignedTransaction: any, privateKey: string): Promise<any>;
}
//# sourceMappingURL=index.d.ts.map