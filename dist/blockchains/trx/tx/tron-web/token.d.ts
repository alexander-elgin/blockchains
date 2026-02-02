import type Tx from '../../../../tx.js';
import type { ContractInfo } from '../../../../abstract/types.js';
export default class TronTxHandler {
    private readonly tronWeb;
    constructor(explorerUrl: string);
    createTx(tx: Tx, contractInfo: ContractInfo): Promise<any>;
}
//# sourceMappingURL=token.d.ts.map