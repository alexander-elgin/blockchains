import { Buffer } from 'buffer';
import { TronWeb } from 'tronweb';

export { getAddress, getPrivateKey } from './keys/index.js';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function getSignTxUrl(unsignedTx: Record<string, any>, callbackUrl = ''): string {
    const txBase64 = Buffer.from(JSON.stringify(unsignedTx)).toString('base64');
    return `tronlink://sign?data=${encodeURIComponent(txBase64)}&callback=${encodeURIComponent(callbackUrl)}`;
}

export function isAddressValid(address: string): boolean {
    return TronWeb.isAddress(address);
}
