import type Tx from '../tx.js';

export default abstract class BlockchainClient {
    abstract getData(address: string): Promise<Array<Tx>> | never;

    isSupported() {
        return true
    }
}
