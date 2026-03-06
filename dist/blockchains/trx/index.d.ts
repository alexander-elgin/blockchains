import Blockchain from '../../abstract/blockchain.js';
import type { AddressValidator, TokenTxCreator, TxCreator, TxRouter, TxSigner } from '../../abstract/blockchain.js';
import type { ContractInfo } from '../../types.js';
import type Tx from '../../tx.js';
export default class TrxBlockchain extends Blockchain implements AddressValidator, TokenTxCreator, TxCreator, TxRouter, TxSigner {
    private readonly network;
    constructor(explorerUrl: string);
    createTokenTx(tx: Tx, contract: ContractInfo): Promise<any>;
    createTx(tx: Tx): Promise<any>;
    getCreateTokenTxUrl(tx: Tx, contract: ContractInfo, callbackUrl?: string): Promise<string>;
    isAddressActive(address: string): Promise<boolean>;
    isAddressValid(address: string): boolean;
    signTx(unsignedTx: any, privateKey: string): Promise<any>;
}
//# sourceMappingURL=index.d.ts.map