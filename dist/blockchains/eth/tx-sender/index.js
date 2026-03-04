import { ethers } from 'ethers';
export default class EthTxSender {
    wallet;
    constructor(RPC, privateKey) {
        this.wallet = new ethers.Wallet(privateKey, new ethers.JsonRpcProvider(RPC));
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    async createTx(tx, contract) {
        const token = new ethers.Contract(contract.address, [
            "function transfer(address to, uint256 amount) returns (bool)"
        ], this.wallet);
        const ethTx = await token?.transfer?.(tx.to, ethers.parseUnits(tx.amount.toString(), 0));
        await ethTx.wait();
        return ethTx;
    }
}
//# sourceMappingURL=index.js.map