import Blockchain from '../../abstract/blockchain.js';
import type { AddressValidator, TxRouter } from '../../abstract/blockchain.js';
import type { ContractInfo } from '../../abstract/types.js';
import type Tx from '../../tx.js';
export default class EthBlockchain extends Blockchain implements AddressValidator, TxRouter {
    constructor(explorerUrl: string, apiKey: string);
    getCreateTokenTxUrl(tx: Tx, contract: ContractInfo): Promise<string>;
    isAddressActive(): Promise<boolean>;
    isAddressValid(address: string): Promise<boolean>;
}
//# sourceMappingURL=index.d.ts.map