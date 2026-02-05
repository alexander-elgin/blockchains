import {describe, expect, it} from '@jest/globals';
import {TronWeb} from 'tronweb';

import Tx from '../../../tx.js';
import createTokenTx from './create-token-tx.js';

describe.skip('.createTokenTx', () => {
    it('sends the unsigned TRC20 transaction', async () => {
        const tronWeb = new TronWeb({fullHost: 'https://api.trongrid.io'});

        const unsignedTx = await createTokenTx(tronWeb, new Tx({
            to: 'TExC2kMpx1raggGXBpn1825c1tQ54xYAHm',
            from: 'TP1iaqTLzC2FNqsWX9t9m9SUdhAYD7hpKD',
            amount: 1,
            timestamp: new Date(),
        }), {type: 'trc20', address: 'TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t'});

        console.log('the TRC20 tx is', unsignedTx);
        expect(unsignedTx.txID).toBeDefined();
    });
});
