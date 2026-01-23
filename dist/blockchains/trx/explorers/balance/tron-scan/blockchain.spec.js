import { beforeAll, describe, expect, it, } from '@jest/globals';
import Blockchain from '../../../../../blockchain.js';
import { BalanceExplorerClient } from '../../../../../clients/explorer/balance.js';
import { TxListExplorerNullClient } from '../../../../../clients/explorer/tx.js';
import TronScanBalanceExplorerRequestAdapter from './request-adapter.js';
import TronScanBalanceExplorerResponseParser from './response-parser.js';
describe.skip('TronScan Balance Blockchain', () => {
    const address = 'TP1iaqTLzC2FNqsWX9t9m9SUdhAYD7hpKD';
    let blockchain;
    beforeAll(() => {
        blockchain = new Blockchain(new BalanceExplorerClient(new TronScanBalanceExplorerRequestAdapter('https://apilist.tronscan.org/api'), new TronScanBalanceExplorerResponseParser()), new TxListExplorerNullClient());
    });
    describe('.getBalance', () => {
        it('returns the account raw balance', async () => {
            const balance = await blockchain.getBalance('TP1iaqTLzC2FNqsWX9t9m9SUdhAYD7hpKD');
            expect(balance).toEqual('33118299');
        });
    });
    describe('.getRealBalance', () => {
        it('returns the account real (floating-point) balance', async () => {
            const balance = await blockchain.getRealBalance(address, 6);
            expect(balance).toBeGreaterThan(33.11);
            expect(balance).toBeLessThan(33.12);
        });
    });
});
//# sourceMappingURL=blockchain.spec.js.map