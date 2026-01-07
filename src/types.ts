import type { TronScanBalanceRecord, TronScanRawResponse, TronScanResponse } from './balance/types.js';

export type BalanceExplorerRecord = TronScanBalanceRecord;

export type ExplorerResponse = TronScanResponse;
export type ExplorerRawResponse = TronScanRawResponse;
export type ExplorerRawResponseField = string | number;

export type ExplorerRequestDataField = string | number;
