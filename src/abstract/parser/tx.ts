import type { Tx } from '../../tx.js';
import type { BalanceExplorerResponse, TxListExplorerResponse } from '../types.js';

export abstract class TxParser {
    abstract parseList(wrappedData: BalanceExplorerResponse): TxListExplorerResponse;
    abstract parseItem(item: BalanceExplorerResponse, digitsNumber: number): Tx;
}
