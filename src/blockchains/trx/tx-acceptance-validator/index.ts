import type { TronWeb } from 'tronweb';

import type { ContractInfo } from '../../../abstract/types.js';

export default class TronTxAcceptanceValidator {
  private readonly network: TronWeb;

  constructor(network: TronWeb) {
    this.network = network;
  }

  async isTxAccepted(txId: string, contract?: ContractInfo): Promise<boolean> {
    const { contractResult, receipt } = await this.network.trx.getTransactionInfo(txId);

    if (contract === undefined) {
      return receipt !== undefined;
    }

    return receipt?.result === 'SUCCESS' && contractResult?.length > 0 && (contractResult[0] ?? '').length > 0;
  }
}
