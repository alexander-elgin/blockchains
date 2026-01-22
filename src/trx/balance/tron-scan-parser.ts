import { BalanceParser } from '../../parser.js';
import type { TronScanBalanceResponse } from './types.js';

export default class TronScanBalanceExplorer extends BalanceParser {
    parse(data: TronScanBalanceResponse) {
        for (const balanceRecord of data.balances) {
            if (balanceRecord.address === undefined) {
                return balanceRecord.amount;
            }
        }
    }
}
