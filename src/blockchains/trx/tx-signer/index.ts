import type { TronWeb } from 'tronweb';

export default class TronTxSigner {
  private readonly network: TronWeb;

  constructor(network: TronWeb) {
    this.network = network;
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  async signTx(unsignedTransaction: any, privateKey: string): Promise<any> {
    return await this.network.trx.sign(unsignedTransaction, privateKey);
  }
}
