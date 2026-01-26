import { toNumberByDecimals } from './utils/conversion.js';

import type Tx from './tx.js';
import type { BalanceRawValue } from './abstract/explorer/types.js';
import type { ContractInfo } from './abstract/types.js';
import type { BalanceClient, TxListClient } from './clients/types.js';

export default class Blockchain {
    private readonly balanceClient: BalanceClient;
    private readonly txClient: TxListClient;

    constructor(balanceClient: BalanceClient, txClient: TxListClient) {
        this.balanceClient = balanceClient;
        this.txClient = txClient;
    }

    async getBalance(address: string): Promise<BalanceRawValue> {
        return await this.balanceClient.getData(address);
    }

    async getBigIntBalance(address: string): Promise<bigint> {
        const res = await this.getBalance(address);
        return BigInt(res ?? '-1');
    }

    async getRealBalance(address: string, decimalsNumber: number): Promise<number> {
        return toNumberByDecimals(await this.getBigIntBalance(address), decimalsNumber);
    }

    async getTxs(address: string, contract?: ContractInfo): Promise<Array<Tx>> {
        return await this.txClient.getData(address, contract);
    }
}
