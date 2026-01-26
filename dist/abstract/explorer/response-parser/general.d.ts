import type { BalanceExplorerResponse, BalanceRawValue, TxListExplorerResponse } from '../types.js';
import type Tx from '../../../tx.js';
export default abstract class ExplorerResponseParser {
    abstract parse(rawResponse: BalanceExplorerResponse | TxListExplorerResponse): BalanceRawValue | Array<Tx>;
}
//# sourceMappingURL=general.d.ts.map