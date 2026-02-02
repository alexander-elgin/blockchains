import { describe, expect, it } from '@jest/globals';
import { TronWeb } from 'tronweb';

import Tx from '../../../tx.js';
import TronTokenTxCreator from './index.js';

describe.skip('TronTokenTxCreator', () => {
  describe('.createTx', () => {
    it('sends the unsigned TRC20 transaction', async () => {
      const txCreator = new TronTokenTxCreator(new TronWeb({ fullHost: 'https://api.trongrid.io' }));

      const unsignedTx = await txCreator.createTx(new Tx({
        to: 'TExC2kMpx1raggGXBpn1825c1tQ54xYAHm',
        from: 'TP1iaqTLzC2FNqsWX9t9m9SUdhAYD7hpKD',
        amount: 1,
        timestamp: new Date(),
      }), { type: 'trc20', address: 'TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t' });

      console.log('the TRC20 tx is', unsignedTx);
      expect(unsignedTx.txID).toBeDefined();
    });
  });
});
