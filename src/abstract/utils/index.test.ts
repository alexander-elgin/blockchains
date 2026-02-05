import { beforeAll, describe, expect, it } from '@jest/globals';

import Tx from '../../tx.js';
import { getMatchedTxs } from './index.js';
import fixtures from './fixtures.json' with { type: 'json' };

describe('.getMatchedTxs', () => {
    let txs: Array<Tx>;

    beforeAll(() => {
        txs = fixtures.map((tx) => new Tx(Object.assign({}, tx, { timestamp: new Date(tx.timestamp )})));
    });

    it('returns an empty array if NO tx with matched amount is found', async () => {
        const tx = {
            amount: '5000000',
            from: 'TP1iaqTLzC2FNqsWX9t9m9SUdhAYD7hpKD',
            to: 'TDN85WSWC3jLviU56t7sVLrADvHCt8zMky',
            timestamp: new Date(1655368010000),
        };
        expect(getMatchedTxs([], new Tx(tx), txs)).toHaveLength(0);
    });

    it('returns an empty array if NO tx for the defined recipient is found', async () => {
        const tx = {
            amount: '4000000',
            from: 'TP1iaqTLzC2FNqsWX9t9m9SUdhAYD7hpKD',
            to: 'TExC2kMpx1raggGXBpn1825c1tQ54xYAHm',
            timestamp: new Date(1655368010000),
        };
        expect(getMatchedTxs([], new Tx(tx), txs)).toHaveLength(0);
    });

    it('returns an empty array if NO tx after the defined date & time is found', async () => {
        const tx = {
            amount: '4000000',
            from: 'TP1iaqTLzC2FNqsWX9t9m9SUdhAYD7hpKD',
            to: 'TDN85WSWC3jLviU56t7sVLrADvHCt8zMky',
            timestamp: new Date(1655368030000),
        };
        expect(getMatchedTxs([], new Tx(tx), txs)).toHaveLength(0);
    });

    it('returns an empty array if the matched tx had been processed already', async () => {
        const tx = {
            amount: '4000000',
            from: 'TP1iaqTLzC2FNqsWX9t9m9SUdhAYD7hpKD',
            to: 'TDN85WSWC3jLviU56t7sVLrADvHCt8zMky',
            timestamp: new Date(1655368010000),
        };
        expect(getMatchedTxs(['59ce0ac0bee8a5a2b907058c2691713dd2b2b958040d1d9e5f01f2c6023ad88b'], new Tx(tx), txs))
            .toHaveLength(0);
    });

    it('returns an NON-empty array OTHERWISE', async () => {
        const tx = {
            amount: '4000000',
            from: 'TP1iaqTLzC2FNqsWX9t9m9SUdhAYD7hpKD',
            to: 'TDN85WSWC3jLviU56t7sVLrADvHCt8zMky',
            timestamp: new Date(1655368010000),
        };
        expect(getMatchedTxs(['7ff6739e8e1590c6fdf59cca3aa13737bc4b2dfaca3a245930f2a7900a74dedc'], new Tx(tx), txs))
            .toHaveLength(1);
    });
});
