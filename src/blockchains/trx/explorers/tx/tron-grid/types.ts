export type TronGridTxRawData = {
    contract: Array<{
        parameter: {
            value: {
                amount: number,
                owner_address: string,
                to_address: string,
            }
        },
        type: string,
    }>
};

export type TronGridTxRecord = {
    block_timestamp: number,
    txID: string,
    raw_data: TronGridTxRawData
};

export type TronGridTxListResponse = { data: Array<TronGridTxRecord> };
