import {describe, expect, it} from '@jest/globals';
import {TronWeb} from 'tronweb';

import Tx from '../../../tx.js';
import createTx from './create-tx.js';
import signTx from './sign-tx.js';

describe.skip('.signTx', () => {
    it('signs the TRX transaction', async () => {
        const tronWeb = new TronWeb({fullHost: 'https://nile.trongrid.io'});

        const unsignedTx = await createTx(tronWeb, new Tx({
            from: 'TS64QAQEL5GfbB61C86ZSJjfkVi6kPFmEA',
            to: 'TGTW32tZRZgo7mjoLpzLt2nH4a8jXdd18Z',
            amount: 1,
            timestamp: new Date(),
        }));

        const privateKey = '061390b49c9ac51ecfe8a00e3d66632f602d2e9e8a239facbea87fc59df80c2e';
        const tx = await signTx(tronWeb, unsignedTx, privateKey);
        expect(tx.signature).toBeDefined();
    });
});
