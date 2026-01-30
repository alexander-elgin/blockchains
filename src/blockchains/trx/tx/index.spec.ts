import { beforeAll, describe, expect, it } from '@jest/globals';

import Tx from '../../../tx.js';
import TronTxHandler from './index.js';

describe('TronTxHandler', () => {
  const network = 'https://nile.trongrid.io';
  const privateKey = '061390b49c9ac51ecfe8a00e3d66632f602d2e9e8a239facbea87fc59df80c2e';
  const sender = 'TS64QAQEL5GfbB61C86ZSJjfkVi6kPFmEA';
  const recipient = 'TGTW32tZRZgo7mjoLpzLt2nH4a8jXdd18Z';

  let handler: TronTxHandler;

  beforeAll(() => {
    handler = new TronTxHandler(network, privateKey);
  });

  describe('.createTx', () => {
    it('sends th TRX transaction without any errors', async () => {
      const unsignedTx = await handler.createTx(new Tx({
        from: sender,
        to: recipient,
        amount: 1,
        timestamp: new Date(),
      }));

      expect(unsignedTx.txID).toBeDefined();
      // expect(signedTx.signature).toBeDefined();
    });
  });
});
