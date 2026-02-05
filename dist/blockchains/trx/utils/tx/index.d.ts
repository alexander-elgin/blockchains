import type { TronWeb } from 'tronweb';
import type { ContractInfo } from '../../../../abstract/types.js';
import type Tx from '../../../../tx.js';
export declare function createTokenTx(network: TronWeb, tx: Tx, contractInfo: ContractInfo): Promise<any>;
export declare function createTx(network: TronWeb, tx: Tx): Promise<any>;
export declare function signTx(network: TronWeb, unsignedTx: any, privateKey: string): Promise<any>;
//# sourceMappingURL=index.d.ts.map