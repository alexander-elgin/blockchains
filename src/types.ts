export type ContractInfo = {
    address: string,
    type: string,
};

export type TxListOptions = {
    sorting?: Sorting,
};

export enum Sorting {
    ASC = 'ASC',
    DESC = 'DESC',
}
