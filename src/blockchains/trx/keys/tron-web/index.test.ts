import { describe, expect, it, } from '@jest/globals';

import { getPrivateKey, getAddress } from './index.js';

describe('TRX keys', () => {
    describe('.getPublicKey', () => {
        it('returns TRX address by the mnemonic phrase', () => {
            expect(getAddress('alarm fetch churn bridge exercise tape speak race clerk couch crater letter'))
                .toEqual('TJvLtkwLejWtX58yvq2nPYwMMxvvcBf6nX');
        });
    });

    describe('.getPrivateKey', () => {
        it('returns TRX private key by the mnemonic phrase', () => {
            expect(getPrivateKey('alarm fetch churn bridge exercise tape speak race clerk couch crater letter').toLowerCase())
                .toEqual('865E4CD34B6AAC5DC68CAF76F591303A945036A392D7DFF2E8257392FF183CBD'.toLowerCase());
        });
    });
});
