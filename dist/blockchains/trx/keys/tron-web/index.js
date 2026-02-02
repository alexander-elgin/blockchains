import * as bip39 from "bip39";
import { BIP32Factory } from "bip32";
import * as ecc from "tiny-secp256k1";
import { ec as EC } from "elliptic";
import keccak from "keccak";
import bs58check from "bs58check";
import { Buffer } from 'buffer';
const bip32 = BIP32Factory(ecc);
const ec = new EC("secp256k1");
function getDerivedKey(mnemonic) {
    if (!bip39.validateMnemonic(mnemonic)) {
        throw new Error("Invalid mnemonic phrase");
    }
    const seed = bip39.mnemonicToSeedSync(mnemonic);
    const root = bip32.fromSeed(seed);
    const path = "m/44'/195'/0'/0/0";
    return root.derivePath(path);
}
export function getPrivateKey(mnemonicPhrase) {
    const derivedKey = getDerivedKey(mnemonicPhrase);
    if (!derivedKey.privateKey) {
        throw new Error("Failed to derive private key");
    }
    return Buffer.from(derivedKey.privateKey).toString('hex');
}
export function getAddress(mnemonicPhrase) {
    const privateKeyHex = getPrivateKey(mnemonicPhrase);
    const keyPair = ec.keyFromPrivate(privateKeyHex);
    const publicKey = keyPair.getPublic(false, "hex").slice(2);
    const hash = keccak("keccak256")
        .update(Buffer.from(publicKey, "hex"))
        .digest("hex");
    const addressHex = "41" + hash.slice(-40); // 41 = TRON mainnet prefix
    return bs58check.encode(Buffer.from(addressHex, "hex"));
}
//# sourceMappingURL=index.js.map