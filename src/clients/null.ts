import type { BalanceClient, TxListClient } from './types.js';

export default class NullBlockchainClient implements BalanceClient, TxListClient {
    getData(): never {
        throw new Error('The method is not supported')
    }
}
