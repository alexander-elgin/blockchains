import { TronWeb } from 'tronweb';
export { getAddress, getPrivateKey } from './keys/index.js';
export declare function getSignTxUrl(unsignedTx: Record<string, any>, callbackUrl?: string): string;
export declare function isAddressValid(address: string): boolean;
export declare function isAddressActive(tronWeb: TronWeb, address: string): Promise<boolean>;
//# sourceMappingURL=index.d.ts.map