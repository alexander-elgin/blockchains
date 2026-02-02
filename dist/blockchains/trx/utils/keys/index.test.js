import { describe, expect, it, } from '@jest/globals';
import { getPrivateKey, getAddress } from './index.js';
describe('TRX keys', () => {
    describe('.getPublicKey', () => {
        it('returns TRX address by the mnemonic phrase', () => {
            expect(getAddress('alarm fetch churn bridge exercise tape speak race clerk couch crater letter'))
                .toEqual('TS64QAQEL5GfbB61C86ZSJjfkVi6kPFmEA');
        });
    });
    describe('.getPrivateKey', () => {
        it('returns TRX private key by the mnemonic phrase', () => {
            expect(getPrivateKey('alarm fetch churn bridge exercise tape speak race clerk couch crater letter').toLowerCase())
                .toEqual('061390b49c9ac51ecfe8a00e3d66632f602d2e9e8a239facbea87fc59df80c2e'.toLowerCase());
        });
    });
});
//# sourceMappingURL=index.test.js.map