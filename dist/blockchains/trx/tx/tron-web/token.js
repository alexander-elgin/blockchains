import { TronWeb } from 'tronweb';
export default class TronTxHandler {
    tronWeb;
    constructor(explorerUrl) {
        this.tronWeb = new TronWeb({
            fullHost: explorerUrl,
        });
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    async createTx(tx, contractInfo) {
        if (!tx.from) {
            throw new Error('TRC20 "from" address is not set');
        }
        const result = await this.tronWeb.transactionBuilder.triggerSmartContract(contractInfo.address, 'transfer(address,uint256)', {
            feeLimit: 100_000_000,
        }, [
            {
                type: 'address',
                value: tx.to,
            },
            {
                type: 'uint256',
                value: tx.amount,
            },
        ], tx.from);
        return result.transaction;
    }
}
//# sourceMappingURL=token.js.map