import type { TronWeb } from 'tronweb';

import type Tx from '../../../tx.js';

export default class TronTxCreator {
  private readonly network: TronWeb;

  constructor(network: TronWeb) {
    this.network = network;
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  async createTx(tx: Tx): Promise<any> {
    this.network.setAddress(tx.from);
    return await this.network.transactionBuilder.sendTrx(tx.to, Number(tx.amount), tx.from);
  }
}
