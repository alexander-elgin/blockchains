import { toNumberByDecimals } from './utils/conversion.js';

import type Tx from './tx.js';
import type { BalanceRawValue } from './abstract/explorer/types.js';
import type { ContractInfo } from './abstract/types.js';
import type { BalanceExplorerGeneralClient } from './clients/explorer/balance.js';
import type { TxListExplorerGeneralClient } from './clients/explorer/tx.js';

export default class Blockchain {
    private readonly balanceClient: BalanceExplorerGeneralClient;
    private readonly txClient: TxListExplorerGeneralClient;

    constructor(balanceClient: BalanceExplorerGeneralClient, txClient: TxListExplorerGeneralClient) {
        this.balanceClient = balanceClient;
        this.txClient = txClient;
    }

    async getBalance(address: string): Promise<BalanceRawValue> | never {
        return await this.balanceClient.getData(address);
    }

    async getBigIntBalance(address: string): Promise<bigint> {
        const res = await this.getBalance(address);
        return BigInt(res ?? '-1');
    }

    async getRealBalance(address: string, decimalsNumber: number): Promise<number> {
        return toNumberByDecimals(await this.getBigIntBalance(address), decimalsNumber);
    }

    async getTxs(address: string, contract?: ContractInfo): Promise<Array<Tx>> | never {
        return await this.txClient.getData(address, contract);
    }
}
