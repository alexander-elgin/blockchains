import { ethers } from 'ethers';

import type Tx from '../../../tx.js';
import type { ContractInfo } from '../../../types.js';

export default class EthTxSender {
    private readonly wallet: ethers.Wallet;

    constructor(RPC: string, privateKey: string) {
        this.wallet = new ethers.Wallet(privateKey, new ethers.JsonRpcProvider(RPC));
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    async createTx(tx: Tx, contract: ContractInfo): Promise<any> {
        const token = new ethers.Contract(contract.address, [
            "function transfer(address to, uint256 amount) returns (bool)"
        ], this.wallet);

        const ethTx = await token?.transfer?.(tx.to, ethers.parseUnits(tx.amount.toString(), 0));
        await ethTx.wait();

        return ethTx;
    }
}
