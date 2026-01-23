export type TronGridTxRecord = {
    block_timestamp: number,
    txID: string,
};

export type TronGridTxListResponse = { data: Array<TronGridTxRecord> };
