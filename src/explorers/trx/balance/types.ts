type TronScanBalanceRecord = {
    address?: string,
    amount: string,
};

export type TronScanBalanceResponse = { balances: Array<TronScanBalanceRecord> };
