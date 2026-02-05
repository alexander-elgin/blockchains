export type TronGridTokenTxRecord = {
    block_timestamp: number;
    from: string;
    to: string;
    transaction_id: string;
    type: string;
    value: string;
};
export type TronGridTokenTxListResponse = {
    data: Array<TronGridTokenTxRecord>;
};
//# sourceMappingURL=types.d.ts.map