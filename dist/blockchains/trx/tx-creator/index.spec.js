import { describe, expect, it } from '@jest/globals';
import { TronWeb } from 'tronweb';
import Tx from '../../../tx.js';
import TronTxCreator from './index.js';
describe.skip('TronTxCreator', () => {
    describe('.createTx', () => {
        it('sends the TRX transaction', async () => {
            const creator = new TronTxCreator(new TronWeb({ fullHost: 'https://nile.trongrid.io' }));
            const unsignedTx = await creator.createTx(new Tx({
                from: 'TS64QAQEL5GfbB61C86ZSJjfkVi6kPFmEA',
                to: 'TGTW32tZRZgo7mjoLpzLt2nH4a8jXdd18Z',
                amount: 1,
                timestamp: new Date(),
            }));
            expect(unsignedTx.txID).toBeDefined();
        });
    });
});
//# sourceMappingURL=index.spec.js.map