export type EtherscanTx = {
    timeStamp: string,
    hash: string,
    from: string,
    to: string,
    value: string,
};

export type EtherscanResponse = {
    status: string,
    message: string,
    result: EtherscanTx[],
};
