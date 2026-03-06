export type ContractInfo = {
    address: string;
    type: string;
};
export declare enum Sorting {
    ASC = "ASC",
    DESC = "DESC"
}
export type Pagination = {
    fingerprint?: string;
    limit: number;
    page?: number;
};
export type TxListOptions = {
    sorting?: Sorting;
    pagination: Pagination;
};
//# sourceMappingURL=types.d.ts.map