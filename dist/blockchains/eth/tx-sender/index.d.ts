import type Tx from '../../../tx.js';
import type { ContractInfo } from '../../../types.js';
export default class EthTxSender {
    private readonly wallet;
    constructor(RPC: string, privateKey: string);
    createTx(tx: Tx, contract: ContractInfo): Promise<any>;
}
//# sourceMappingURL=index.d.ts.map