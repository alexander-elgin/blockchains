export type ContractInfo = {
    address: string,
    type: string,
};

export type TxListOptions = {
    sorting?: Sorting,
    pagination: {
        fingerprint?: string,
        limit: number,
        page?: number,
    }
};

export enum Sorting {
    ASC = 'ASC',
    DESC = 'DESC',
}
