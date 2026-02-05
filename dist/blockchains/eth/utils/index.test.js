import { describe, expect, it, } from '@jest/globals';
import { isAddressValid } from './index.js';
describe('isAddressValid', () => {
    it('returns `true` for a valid address', async () => {
        expect(isAddressValid('0xd3B4eCCe0c09077280E361A7E4c5c85490C2E4Ed')).toEqual(true);
    });
    it('returns `false` for an invalid address', async () => {
        expect(isAddressValid('invalid address')).toEqual(false);
    });
});
//# sourceMappingURL=index.test.js.map