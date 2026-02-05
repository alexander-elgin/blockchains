import { getMatchedTxs } from './utils/index.js';

import type Tx from '../tx.js';
import type { BlockchainClient, ContractInfo } from './types.js';

export default abstract class Blockchain {
    protected readonly txListClient: BlockchainClient;

    protected constructor(txListClient: BlockchainClient) {
        this.txListClient = txListClient;
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    abstract createTx(tx: Tx, contractInfo?: ContractInfo): Promise<any>;
    abstract isAddressActive(address: string): Promise<boolean>;
    abstract isAddressValid(address: string): boolean;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    abstract signTx(unsignedTransaction: any, privateKey: string): Promise<any>;

    async getMatchedTxs(ignored: Array<string>, targetTx: Tx, contract: ContractInfo): Promise<Array<Tx>> {
        return getMatchedTxs(ignored, targetTx, await this.txListClient.getData(targetTx.from, contract));
    }
}
