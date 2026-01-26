import type Tx from '../tx.js';
import type { BalanceRawValue } from './explorer/types.js';
export default abstract class BlockchainClient {
    abstract getData(address: string): Promise<BalanceRawValue | Array<Tx>> | never;
    isSupported(): boolean;
}
//# sourceMappingURL=client.d.ts.map