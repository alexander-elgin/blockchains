import Blockchain from '../../abstract/blockchain.js';
import type { AddressValidator, TokenTxCreator, TxCreator, TxRouter, TxSigner } from '../../abstract/blockchain.js';
import type { ContractInfo } from '../../abstract/types.js';
import type Tx from '../../tx.js';
export default class TrxBlockchain extends Blockchain implements AddressValidator, TokenTxCreator, TxCreator, TxRouter, TxSigner {
    private readonly network;
    private readonly tokenTxCreator;
    private readonly txCreator;
    private readonly signer;
    constructor(explorerUrl: string);
    createTokenTx(tx: Tx, contract: ContractInfo): Promise<any>;
    createTx(tx: Tx): Promise<any>;
    getCreateTokenTxUrl(tx: Tx, contract: ContractInfo, callbackUrl?: string): Promise<string>;
    isAddressActive(address: string): Promise<boolean>;
    isAddressValid(address: string): Promise<boolean>;
    signTx(unsignedTransaction: any, privateKey: string): Promise<any>;
}
//# sourceMappingURL=index.d.ts.map