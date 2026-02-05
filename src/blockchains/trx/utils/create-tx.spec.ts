import { describe, expect, it } from '@jest/globals';
import { TronWeb } from 'tronweb';

import Tx from '../../../tx.js';
import createTx from './create-tx.js';

describe.skip('TronTxCreator', () => {
  describe('.createTx', () => {
    it('sends the TRX transaction', async () => {
      const tronWeb = new TronWeb({ fullHost: 'https://nile.trongrid.io' });

      const unsignedTx = await createTx(tronWeb, new Tx({
        from: 'TS64QAQEL5GfbB61C86ZSJjfkVi6kPFmEA',
        to: 'TGTW32tZRZgo7mjoLpzLt2nH4a8jXdd18Z',
        amount: 1,
        timestamp: new Date(),
      }));

      expect(unsignedTx.txID).toBeDefined();
    });
  });
});
