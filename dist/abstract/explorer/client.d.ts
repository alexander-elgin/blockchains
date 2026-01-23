import type Tx from '../../tx.js';
import type { BalanceRawValue } from './types.js';
export default abstract class ExplorerClient {
    abstract getData(address: string): Promise<BalanceRawValue | Array<Tx>> | never;
    isSupported(): boolean;
}
//# sourceMappingURL=client.d.ts.map