import type { TronWeb } from 'tronweb';
export default class TronTxSigner {
    private readonly network;
    constructor(network: TronWeb);
    signTx(unsignedTransaction: any, privateKey: string): Promise<any>;
}
//# sourceMappingURL=index.d.ts.map