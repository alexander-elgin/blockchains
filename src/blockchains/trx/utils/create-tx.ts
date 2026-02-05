import type { TronWeb } from 'tronweb';

import type Tx from '../../../tx.js';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default async function createTx(network: TronWeb, tx: Tx): Promise<any> {
    network.setAddress(tx.from);
    return await network.transactionBuilder.sendTrx(tx.to, Number(tx.amount), tx.from);
}
