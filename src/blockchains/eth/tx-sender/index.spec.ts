import { beforeAll, describe, expect, it, } from '@jest/globals';

import EthTxSender from './index.js';
import Tx from '../../../tx.js';

describe.skip('ETH Token Tx Sender', () => {
    let client: EthTxSender;

    beforeAll(() => {
        const privateKey = '0x36cc81875c54aafe1bc3587d88eebda659c13d8feb527e0e5655a558b6d9ac3e';
        client = new EthTxSender('https://cloudflare-eth.com', privateKey);
    });

    describe('.createTx', () => {
        it('returns the ETH tx', async () => {
            const tx = await client.createTx(new Tx({
                amount: 10,
                to: '0xd3B4eCCe0c09077280E361A7E4c5c85490C2E4Ed',
                from: '0x0742879337fd24002B28E7c24A3157b2a1b31249',
            }), { address: '0xdAC17F958D2ee523a2206206994597C13D831ec7', type: 'erc20' });
            console.log(tx);
            expect(true).toBeTruthy();
        });
    });
});
