import type { TronWeb } from 'tronweb';

import type { ContractInfo } from '../../../abstract/types.js';
import type Tx from '../../../tx.js';

export default class TronTokenTxCreator {
  private readonly network: TronWeb;

  constructor(network: TronWeb) {
    this.network = network;
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  async createTx(tx: Tx, contractInfo: ContractInfo): Promise<any> {
    if (!tx.from) {
      throw new Error('TRC20 "from" address is not set');
    }

    const result = await this.network.transactionBuilder.triggerSmartContract(
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
