import { TronWeb } from 'tronweb';

import type Tx from '../../../../tx.js';

export default class TronTxHandler {
  private readonly tronWeb: TronWeb;

  constructor(explorerUrl: string) {
    this.tronWeb = new TronWeb({
      fullHost: explorerUrl,
    });
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  async createTx(tx: Tx): Promise<any> {
    this.tronWeb.setAddress(tx.from);
    return await this.tronWeb.transactionBuilder.sendTrx(tx.to, Number(tx.amount), tx.from);
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  async signTx(unsignedTransaction: any, privateKey: string): Promise<any> {
    return await this.tronWeb.trx.sign(unsignedTransaction, privateKey);
  }
}
