import type { Tx } from './tx.js';
import type { BalanceExplorerResponse, BalanceRawValue, TxListExplorerResponse } from './types.js';

export abstract class BalanceParser {
    abstract parse(responseRawData: BalanceExplorerResponse): BalanceRawValue;
}

export abstract class TxParser {
    abstract parseList(wrappedData: BalanceExplorerResponse): TxListExplorerResponse;
    abstract parseItem(item: BalanceExplorerResponse, digitsNumber: number): Tx;
}
