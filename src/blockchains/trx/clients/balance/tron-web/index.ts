import { TronWeb } from 'tronweb';

import BlockchainClient from '../../../../../abstract/client.js';

import type { BalanceRawValue } from '../../../../../abstract/explorer/types.js';
import type { ContractInfo } from '../../../../../abstract/types.js';
import type { BalanceClient } from '../../../../../clients/types.js';

const abi = [
    {
        'outputs': [{ 'type': 'uint256' }],
        'constant': true,
        'inputs': [{ 'name': 'who', 'type': 'address' }],
        'name': 'balanceOf',
        'stateMutability': 'View',
        'type': 'Function'
    },
    {
        'outputs': [{ 'type': 'bool' }],
        'inputs': [
            { 'name': '_to', 'type': 'address' },
            { 'name': '_value', 'type': 'uint256' }
        ],
        'name': 'transfer',
        'stateMutability': 'Nonpayable',
        'type': 'Function'
    }
];

export default class TronWebBalanceClient extends BlockchainClient implements BalanceClient {
    private readonly explorerUrl: string;

    constructor(explorerUrl: string) {
        super();
        this.explorerUrl = explorerUrl;
    }
    async getData(address: string, contract?: ContractInfo): Promise<BalanceRawValue> {
        const tronWeb = new TronWeb({
            fullHost: this.explorerUrl,
            solidityNode: this.explorerUrl,
            eventServer: this.explorerUrl,
        });
        tronWeb.setAddress(address);

        const contractData = await tronWeb.contract(abi,contract?.address ?? '');
        const balance = await contractData.balanceOf(address).call();

        return balance.toString();
    }
}
