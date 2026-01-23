import type Tx from '../../../tx.js';
import type { TxListExplorerResponse } from '../types.js';
type TxRawData = Record<string, string | number>;
export default abstract class TxListExplorerResponseParser {
    abstract parseList(data: TxListExplorerResponse): Array<TxRawData>;
    abstract parseItem(item: TxRawData): Tx;
    parse(data: TxListExplorerResponse): Array<Tx>;
}
export {};
//# sourceMappingURL=tx.d.ts.map