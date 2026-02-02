import { TronWeb } from 'tronweb';

import Tx from '../../../tx.js';

import type { ContractInfo } from '../../../abstract/types.js';

export default class TronTxHandler {
  private readonly tronWeb: TronWeb;

  constructor(explorerUrl: string) {
    this.tronWeb = new TronWeb({
      fullHost: explorerUrl,
    });
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  async createTx(tx: Tx, contractInfo: ContractInfo): Promise<any> {
    if (!tx.from) {
      throw new Error('TRC20 "from" address is not set');
    }

    const result = await this.tronWeb.transactionBuilder.triggerSmartContract(
        contractInfo.address,
        'transfer(address,uint256)',
        {
          feeLimit: 100_000_000,
        },
        [
          {
            type: 'address',
            value: tx.to,
          },
          {
            type: 'uint256',
            value: tx.amount,
          },
        ],
        tx.from,
    );

    return result.transaction;
  }
}
