import ExplorerResponseParser from './general.js';

import type Tx from '../../../tx.js';
import type { TxListExplorerResponse } from '../types.js';
import type { TxRawData } from './types.js';

export default abstract class TxListExplorerResponseParser extends ExplorerResponseParser {
    abstract parseList(data: TxListExplorerResponse): Array<TxRawData>;
    abstract parseItem(item: TxRawData): Tx;

    parse(data: TxListExplorerResponse): Array<Tx> {
        return this.parseList(data).map(this.parseItem);
    }
}
