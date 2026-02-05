import { TronWeb } from 'tronweb';
export * from './keys/index.js';
export * from './tx/index.js';
export declare function getSignTxUrl(unsignedTx: Record<string, any>, callbackUrl?: string): string;
export declare function isAddressValid(address: string): boolean;
export declare function isAddressActive(tronWeb: TronWeb, address: string): Promise<boolean>;
//# sourceMappingURL=index.d.ts.map