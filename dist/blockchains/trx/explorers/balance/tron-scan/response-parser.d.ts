import BalanceExplorerResponseParser from '../../../../../abstract/explorer/response-parser/balance.js';
import type { TronScanBalanceResponse } from './types.js';
export default class TronScanBalanceExplorerResponseParser extends BalanceExplorerResponseParser {
    parse(data: TronScanBalanceResponse): string | undefined;
}
//# sourceMappingURL=response-parser.d.ts.map