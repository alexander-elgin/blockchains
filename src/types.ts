export type TronScanResponse = Array<Record<string, ExplorerRawResponseField>>;
export type TronScanRawResponse = { balances: TronScanResponse };

export type TronScanBalanceRecord = {
    amount: string,
};

export type BalanceExplorerRecord = TronScanBalanceRecord;

export type ExplorerResponse = TronScanResponse;
export type ExplorerRawResponse = TronScanRawResponse;
export type ExplorerRawResponseField = string | number;

export type ExplorerRequestDataField = string | number;
