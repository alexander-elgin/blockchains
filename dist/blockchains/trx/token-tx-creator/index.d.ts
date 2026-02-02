import type { TronWeb } from 'tronweb';
import type { ContractInfo } from '../../../abstract/types.js';
import type Tx from '../../../tx.js';
export default class TronTokenTxCreator {
    private readonly network;
    constructor(network: TronWeb);
    createTx(tx: Tx, contractInfo: ContractInfo): Promise<any>;
}
//# sourceMappingURL=index.d.ts.map