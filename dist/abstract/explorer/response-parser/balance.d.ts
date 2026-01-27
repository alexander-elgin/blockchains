import ExplorerResponseParser from './general.js';
import type { BalanceExplorerResponse, BalanceRawValue } from '../types.js';
import type { ContractInfo } from '../../types.js';
export default abstract class BalanceExplorerResponseParser extends ExplorerResponseParser {
    abstract parse(responseRawData: BalanceExplorerResponse, contract?: ContractInfo): BalanceRawValue;
}
//# sourceMappingURL=balance.d.ts.map