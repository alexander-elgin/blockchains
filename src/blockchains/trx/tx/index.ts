import { TronWeb } from 'tronweb';

import Tx from '../../../tx.js';

export default class TronTxHandler {
  private readonly privateKey: string;
  private readonly tronWeb: TronWeb;

  constructor(explorerUrl: string, privateKey: string) {
    this.privateKey = privateKey;

    this.tronWeb = new TronWeb({
      fullHost: explorerUrl,
      privateKey: privateKey,
    });
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  async createTx(tx: Tx): Promise<any> {
    this.tronWeb.setAddress(tx.from);
    return await this.tronWeb.transactionBuilder.sendTrx(tx.to, Number(tx.amount), tx.from);
  }
}
