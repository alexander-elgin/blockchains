import { describe, expect, it, } from '@jest/globals';
import { getSignTxUrl, isAddressValid } from './index.js';
describe('getSignTrxTxUrl', () => {
    it('returns a string', async () => {
        const url = getSignTxUrl({});
        expect(typeof url).toEqual('string');
    });
});
describe('isAddressValid', () => {
    it('returns `true` for a valid address', async () => {
        expect(isAddressValid('TExC2kMpx1raggGXBpn1825c1tQ54xYAHm')).toEqual(true);
    });
    it('returns `false` for an invalid address', async () => {
        expect(isAddressValid('invalid address')).toEqual(false);
    });
});
//# sourceMappingURL=index.test.js.map