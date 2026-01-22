import type { BalanceExplorerResponse, BalanceRawValue } from '../types.js';

export abstract class BalanceParser {
    abstract parse(responseRawData: BalanceExplorerResponse): BalanceRawValue;
}
