import type { BalanceExplorerResponse, BalanceRawValue } from '../types.js';
export default abstract class BalanceExplorerResponseParser {
    abstract parse(responseRawData: BalanceExplorerResponse): BalanceRawValue;
}
//# sourceMappingURL=balance.d.ts.map