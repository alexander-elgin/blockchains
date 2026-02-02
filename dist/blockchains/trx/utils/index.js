import { Buffer } from 'buffer';
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function getSignTxUrl(unsignedTx, memo = '', callbackUrl = '') {
    unsignedTx.memo = memo;
    const txBase64 = Buffer.from(JSON.stringify(unsignedTx)).toString('base64');
    return `tronlink://sign?data=${encodeURIComponent(txBase64)}&callback=${encodeURIComponent(callbackUrl)}`;
}
//# sourceMappingURL=index.js.map