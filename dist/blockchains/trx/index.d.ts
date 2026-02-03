import type Blockchain from '../../abstract/blockchain.js';
import type { ContractInfo } from '../../abstract/types.js';
import type Tx from '../../tx.js';
export default class TrxBlockchain implements Blockchain {
    private readonly network;
    private readonly tokenTxCreator;
    private readonly txAcceptanceValidator;
    private readonly txCreator;
    private readonly signer;
    constructor(explorerUrl: string);
    createTx(tx: Tx, contract?: ContractInfo): Promise<any>;
    isAddressActive(address: string): Promise<boolean>;
    isAddressValid(address: string): boolean;
    isTxAccepted(txId: string, contract?: ContractInfo): Promise<boolean>;
    signTx(unsignedTransaction: any, privateKey: string): Promise<any>;
}
//# sourceMappingURL=index.d.ts.map