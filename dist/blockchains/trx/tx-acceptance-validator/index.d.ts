import type { TronWeb } from 'tronweb';
import type { ContractInfo } from '../../../abstract/types.js';
export default class TronTxAcceptanceValidator {
    private readonly network;
    constructor(network: TronWeb);
    isTxAccepted(txId: string, contract?: ContractInfo): Promise<boolean>;
}
//# sourceMappingURL=index.d.ts.map