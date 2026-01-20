import type { Tx } from './tx.js';
import type { BalanceExplorerRecord, ExplorerRawResponse, ExplorerResponse } from './types.js';

abstract class Parser {
    abstract parseResponseWrapper(wrappedData: ExplorerRawResponse): ExplorerResponse;
}

export abstract class BalanceParser extends Parser {
    abstract parseResponseItem(item: BalanceExplorerRecord): bigint;
}

export abstract class TxParser extends Parser {
    abstract parseResponseItem(item: ExplorerRawResponse, digitsNumber: number): Tx;
}
