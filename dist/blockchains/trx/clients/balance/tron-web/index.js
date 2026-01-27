import { TronWeb } from 'tronweb';
import BlockchainClient from '../../../../../abstract/client.js';
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
export default class TronWebBalanceClient extends BlockchainClient {
    explorerUrl;
    constructor(explorerUrl) {
        super();
        this.explorerUrl = explorerUrl;
    }
    async getData(address, contract) {
        const tronWeb = new TronWeb({
            fullHost: this.explorerUrl,
            solidityNode: this.explorerUrl,
            eventServer: this.explorerUrl,
        });
        tronWeb.setAddress(address);
        const contractData = await tronWeb.contract(abi, contract?.address ?? '');
        const balance = await contractData.balanceOf(address).call();
        return balance.toString();
    }
}
//# sourceMappingURL=index.js.map