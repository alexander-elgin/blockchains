import BalanceExplorerResponseParser from '../../../../../abstract/explorer/response-parser/balance.js';
import type { TronScanTokenBalanceResponse } from './types.js';
import type { BalanceRawValue } from "../../../../../abstract/explorer/types.js";
import type { ContractInfo } from '../../../../../abstract/types.js';
export default class TronScanTokenBalanceExplorerResponseParser extends BalanceExplorerResponseParser {
    parse(data: TronScanTokenBalanceResponse, contract?: ContractInfo): BalanceRawValue;
}
//# sourceMappingURL=response-parser.d.ts.map