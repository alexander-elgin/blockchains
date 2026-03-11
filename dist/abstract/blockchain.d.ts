import type { BlockchainClient, BlockchainClientResponse } from './types.js';
import type Tx from '../tx.js';
import type { ContractInfo } from '../types.js';
export default abstract class Blockchain {
    protected readonly txListClient: BlockchainClient;
    protected constructor(txListClient: BlockchainClient);
    getAllowedLimit(limit: number): number;
    getTxs(address: string, contract: ContractInfo): BlockchainClientResponse;
    getMatchedTxs(ignored: Array<string>, targetTx: Tx, contract: ContractInfo): Promise<Array<Tx>>;
}
export interface AddressValidator {
    isAddressActive(address: string): Promise<boolean>;
    isAddressValid(address: string): boolean;
}
export interface KeysGenerator {
    getAddress(mnemonicPhrase: string): string;
    getPrivateKey(mnemonicPhrase: string): string;
}
export interface TokenTxCreator {
    createTokenTx(tx: Tx, contract: ContractInfo): Promise<any>;
}
export interface TxCreator {
    createTx(tx: Tx): Promise<any>;
}
export interface TxSigner {
    signTx(unsignedTx: any, privateKey: string): Promise<any>;
}
export interface TxRouter {
    getCreateTokenTxUrl(tx: Tx, contract: ContractInfo): Promise<string>;
}
//# sourceMappingURL=blockchain.d.ts.map