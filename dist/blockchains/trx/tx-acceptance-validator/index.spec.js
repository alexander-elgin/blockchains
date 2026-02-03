import { beforeAll, describe, expect, it } from '@jest/globals';
import { TronWeb } from 'tronweb';
import TronTxAcceptanceValidator from './index.js';
describe.skip('TronTxAcceptanceValidator', () => {
    let validator;
    beforeAll(() => {
        const tronWeb = new TronWeb({ fullHost: 'https://api.trongrid.io' });
        validator = new TronTxAcceptanceValidator(tronWeb);
    });
    describe('.isTxAccepted', () => {
        it('returns `false` if the tx is not signed', async () => {
            const status = await validator.isTxAccepted('ffcdcbc32d4ca86121267155605cb694aa92a1f1c63020159535e53252a56412');
            expect(status).toEqual(false);
        });
        it('returns `true` if the tx is explored', async () => {
            const status = await validator.isTxAccepted('21a5c3821b7d3d119c8e83ef766d731806b52244cf7340410517510bc0fd5146');
            expect(status).toEqual(true);
        });
        it('returns `true` if the tx is explored', async () => {
            const status = await validator.isTxAccepted('7ff6739e8e1590c6fdf59cca3aa13737bc4b2dfaca3a245930f2a7900a74dedc', { type: 'trc20', address: 'TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t' });
            expect(status).toEqual(true);
        });
    });
});
//# sourceMappingURL=index.spec.js.map