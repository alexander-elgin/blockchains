import type Tx from '../tx.js';

export interface BlockchainClient {
    getData(address: string, contract?: ContractInfo): Promise<Array<Tx>>;
}

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
