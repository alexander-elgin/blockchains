import { beforeAll, describe, expect, it, } from '@jest/globals';
import { TronWeb } from 'tronweb';
import { isAddressActive } from './index.js';
describe.skip('isAddressActive', () => {
    let network;
    beforeAll(() => {
        network = new TronWeb({ fullHost: 'https://api.trongrid.io' });
    });
    it('returns `true` for an active address', async () => {
        expect(await isAddressActive(network, 'TP1iaqTLzC2FNqsWX9t9m9SUdhAYD7hpKD')).toEqual(true);
    });
    it('returns `false` for an inactive address', async () => {
        expect(await isAddressActive(network, 'TMwoPtoRKE1pnfj9DPzR5Z4PfGp12GpyBt')).toEqual(false);
    });
});
//# sourceMappingURL=index.spec.js.map