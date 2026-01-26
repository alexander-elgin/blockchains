import type { BalanceClient, TxListClient } from './types.js';
export default class NullBlockchainClient implements BalanceClient, TxListClient {
    getData(): never;
}
//# sourceMappingURL=null.d.ts.map