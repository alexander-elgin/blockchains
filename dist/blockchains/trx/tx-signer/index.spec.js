import { describe, expect, it } from '@jest/globals';
import { TronWeb } from 'tronweb';
import Tx from '../../../tx.js';
import TronTxCreator from '../tx-creator/index.js';
import TronTxSigner from './index.js';
describe.skip('TronTxSigner', () => {
    describe('.signTx', () => {
        it('signs the TRX transaction', async () => {
            const tronWeb = new TronWeb({ fullHost: 'https://nile.trongrid.io' });
            const creator = new TronTxCreator(tronWeb);
            const signer = new TronTxSigner(tronWeb);
            const unsignedTx = await creator.createTx(new Tx({
                from: 'TS64QAQEL5GfbB61C86ZSJjfkVi6kPFmEA',
                to: 'TGTW32tZRZgo7mjoLpzLt2nH4a8jXdd18Z',
                amount: 1,
                timestamp: new Date(),
            }));
            const tx = await signer.signTx(unsignedTx, '061390b49c9ac51ecfe8a00e3d66632f602d2e9e8a239facbea87fc59df80c2e');
            expect(tx.signature).toBeDefined();
        });
    });
});
//# sourceMappingURL=index.spec.js.map