import type {TronWeb} from 'tronweb';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default async function signTx(network: TronWeb, unsignedTx: any, privateKey: string): Promise<any> {
    return await network.trx.sign(unsignedTx, privateKey);
}
