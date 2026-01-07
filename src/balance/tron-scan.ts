import { BalanceExplorer } from '../explorer.js';
import type { TronScanBalanceRecord, TronScanRawResponse, TronScanResponse } from './types.js';
import type { ExplorerRequestDataField } from '../types.js';

export default class TronScanBalanceExplorer extends BalanceExplorer {
    getData(address: string): Record<string, ExplorerRequestDataField> {
        return { address }
    }

    protected getUri(): string {
        return '/accountv2';
    }

    parseResponseItem(balanceRecord: TronScanBalanceRecord): bigint {
        return BigInt(balanceRecord.amount);
    }

    parseResponseWrapper(data: TronScanRawResponse): TronScanResponse {
        return data.balances;
    }
}
