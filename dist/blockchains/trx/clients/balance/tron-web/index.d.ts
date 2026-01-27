import BlockchainClient from '../../../../../abstract/client.js';
import type { BalanceRawValue } from '../../../../../abstract/explorer/types.js';
import type { ContractInfo } from '../../../../../abstract/types.js';
import type { BalanceClient } from '../../../../../clients/types.js';
export default class TronWebBalanceClient extends BlockchainClient implements BalanceClient {
    private readonly explorerUrl;
    constructor(explorerUrl: string);
    getData(address: string, contract?: ContractInfo): Promise<BalanceRawValue>;
}
//# sourceMappingURL=index.d.ts.map