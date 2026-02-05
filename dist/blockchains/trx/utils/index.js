import { Buffer } from 'buffer';
import { TronWeb } from 'tronweb';
export * from './keys/index.js';
export * from './tx/index.js';
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function getSignTxUrl(unsignedTx, callbackUrl = '') {
    const txBase64 = Buffer.from(JSON.stringify(unsignedTx)).toString('base64');
    return `tronlink://sign?data=${encodeURIComponent(txBase64)}&callback=${encodeURIComponent(callbackUrl)}`;
}
export function isAddressValid(address) {
    return TronWeb.isAddress(address);
}
export async function isAddressActive(tronWeb, address) {
    const account = await tronWeb.trx.getAccount(address);
    return Object.keys(account).length > 0;
}
//# sourceMappingURL=index.js.map