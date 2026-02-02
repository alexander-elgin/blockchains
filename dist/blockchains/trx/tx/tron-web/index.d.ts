import type Tx from '../../../../tx.js';
export default class TronTxHandler {
    private readonly tronWeb;
    constructor(explorerUrl: string);
    createTx(tx: Tx): Promise<any>;
    signTx(unsignedTransaction: any, privateKey: string): Promise<any>;
}
//# sourceMappingURL=index.d.ts.map