import type { TxListExplorerResponse } from '../types.js';
import type Tx from '../../../tx.js';

export default abstract class ExplorerResponseParser {
    abstract parse(rawResponse: TxListExplorerResponse): Array<Tx>;
}
