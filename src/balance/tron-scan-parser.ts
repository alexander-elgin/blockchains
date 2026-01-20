import { BalanceParser } from '../parser.js';
import type { TronScanBalanceRecord, TronScanRawResponse, TronScanResponse } from './types.js';

export default class TronScanBalanceExplorer extends BalanceParser {
    parseResponseItem(balanceRecord: TronScanBalanceRecord): bigint {
        return BigInt(balanceRecord.amount);
    }

    parseResponseWrapper(data: TronScanRawResponse): TronScanResponse {
        return data.balances;
    }
}
