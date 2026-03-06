export type ContractInfo = {
    address: string,
    type: string,
};

export enum Sorting {
    ASC = 'ASC',
    DESC = 'DESC',
}

export type Pagination = {
    fingerprint?: string,
    limit: number,
    page?: number,
};

export type TxListOptions = {
    sorting?: Sorting,
    pagination: Pagination,
};
