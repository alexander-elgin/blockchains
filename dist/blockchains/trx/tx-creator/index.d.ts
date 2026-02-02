import type { TronWeb } from 'tronweb';
import type Tx from '../../../tx.js';
export default class TronTxCreator {
    private readonly network;
    constructor(network: TronWeb);
    createTx(tx: Tx): Promise<any>;
}
//# sourceMappingURL=index.d.ts.map