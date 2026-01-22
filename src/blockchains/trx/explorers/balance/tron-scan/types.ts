type TronScanBalanceRecord = {
    address?: string,
    balance: string,
};

export type TronScanBalanceResponse = { balances: Array<TronScanBalanceRecord> };
