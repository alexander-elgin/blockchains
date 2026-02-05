import { getCreateTxUrl } from './utils/index.js';

import type { TxRouter } from '../../abstract/blockchain.js';
import type { ContractInfo } from '../../abstract/types.js';
import type Tx from '../../tx.js';

export default class EthBlockchain implements TxRouter {
    async getCreateTokenTxUrl(tx: Tx, contract: ContractInfo): Promise<string> {
        return getCreateTxUrl(tx, contract);
    }
}
