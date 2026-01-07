import type { ExplorerRawResponseField } from '../types.js';

export type TronScanResponse = Array<Record<string, ExplorerRawResponseField>>;
export type TronScanRawResponse = { balances: TronScanResponse };

export type TronScanBalanceRecord = {
    amount: string,
};
