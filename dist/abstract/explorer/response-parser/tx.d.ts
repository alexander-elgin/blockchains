import type { Tx } from '../../../tx.js';
import type { BalanceExplorerResponse, TxListExplorerResponse } from '../types.js';
export default abstract class TxParser {
    abstract parseList(wrappedData: BalanceExplorerResponse): TxListExplorerResponse;
    abstract parseItem(item: BalanceExplorerResponse, digitsNumber: number): Tx;
}
//# sourceMappingURL=tx.d.ts.map