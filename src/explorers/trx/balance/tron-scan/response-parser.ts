import BalanceExplorerResponseParser from '../../../../abstract/response-parser/balance.js';
import type { TronScanBalanceResponse } from './types.js';

export default class TronScanBalanceExplorerResponseParser extends BalanceExplorerResponseParser {
    parse(data: TronScanBalanceResponse) {
        for (const balanceRecord of data.balances) {
            if (balanceRecord.address === undefined) {
                return balanceRecord.balance;
            }
        }
    }
}
