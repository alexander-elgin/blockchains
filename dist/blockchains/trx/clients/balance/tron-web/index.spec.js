import { beforeAll, describe, expect, it, } from '@jest/globals';
import TronWebBalanceClient from './index.js';
describe.skip('TronScan Token Balance Client', () => {
    let client;
    beforeAll(() => {
        client = new TronWebBalanceClient('https://api.trongrid.io');
    });
    describe('.getData', () => {
        it('returns the account USDT raw balance', async () => {
            const USDC_TRC20_address = 'TEkxiTehnzSmSe2XqrBj4w32RUN966rdz8';
            const balance = await client.getData('TTWxjbzsMq8KpLFdvvt4hnDFK4vzCb18Vq', {
                address: USDC_TRC20_address,
                type: 'trc20',
            });
            expect(balance).toEqual('1790902');
        });
    });
});
//# sourceMappingURL=index.spec.js.map