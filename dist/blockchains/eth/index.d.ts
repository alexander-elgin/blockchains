import Blockchain from '../../abstract/blockchain.js';
import type { TxRouter } from '../../abstract/blockchain.js';
import type { ContractInfo } from '../../abstract/types.js';
import type Tx from '../../tx.js';
export default class EthBlockchain extends Blockchain implements TxRouter {
    constructor(explorerUrl: string, apiKey: string);
    getCreateTokenTxUrl(tx: Tx, contract: ContractInfo): Promise<string>;
}
//# sourceMappingURL=index.d.ts.map