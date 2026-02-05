import { getMatchedTxs } from './utils/index.js';

import type Tx from '../tx.js';
import type { BlockchainClient, ContractInfo } from './types.js';

export default abstract class Blockchain {
    protected readonly txListClient: BlockchainClient;

    protected constructor(txListClient: BlockchainClient) {
        this.txListClient = txListClient;
    }

    async getMatchedTxs(ignored: Array<string>, targetTx: Tx, contract: ContractInfo): Promise<Array<Tx>> {
        return getMatchedTxs(ignored, targetTx, await this.txListClient.getData(targetTx.from, contract));
    }
}

export interface AddressValidator {
    isAddressActive(address: string): Promise<boolean>;
    isAddressValid(address: string): Promise<boolean>;
}

export interface TokenTxCreator {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    createTokenTx(tx: Tx, contract: ContractInfo): Promise<any>;
}

export interface TxCreator {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    createTx(tx: Tx): Promise<any>;
}

export interface TxSigner {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    signTx(unsignedTx: any, privateKey: string): Promise<any>;
}

export interface TxRouter {
    getCreateTokenTxUrl(tx: Tx, contract: ContractInfo): Promise<string>;
}
