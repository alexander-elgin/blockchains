import { beforeAll, describe, expect, it } from '@jest/globals';

import Tx from '../../../tx.js';
import TronTxHandler from './token.js';

describe.skip('TronTrc20Handler', () => {
  const network = 'https://api.trongrid.io';
  const recipient = 'TExC2kMpx1raggGXBpn1825c1tQ54xYAHm';

  let handler: TronTxHandler;
  let unsignedTx: any; // eslint-disable-line @typescript-eslint/no-explicit-any

  beforeAll(async () => {
    handler = new TronTxHandler(network);

    unsignedTx = await handler.createTx(new Tx({
      to: recipient,
      from: 'TP1iaqTLzC2FNqsWX9t9m9SUdhAYD7hpKD',
      amount: 1,
      timestamp: new Date(),
    }), { type: 'trc20', address: 'TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t' });
  });

  describe('.createTx', () => {
    it('sends the unsigned TRC20 transaction', () => {
      console.log('the TRC20 tx is', unsignedTx);
      expect(unsignedTx.txID).toBeDefined();
    });
  });
});
