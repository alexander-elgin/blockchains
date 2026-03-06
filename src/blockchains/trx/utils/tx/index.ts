import type { TronWeb } from 'tronweb';

import type {ContractInfo} from '../../../../types.js';
import type Tx from '../../../../tx.js';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function createTokenTx(network: TronWeb, tx: Tx, contractInfo: ContractInfo): Promise<any> {
    if (!tx.from) {
        throw new Error('TRC20 "from" address is not set');
    }

    const result = await network.transactionBuilder.triggerSmartContract(
        contractInfo.address,
        'transfer(address,uint256)',
        {feeLimit: 100_000_000},
        [
            {type: 'address', value: tx.to},
            {type: 'uint256', value: tx.amount},
        ],
        tx.from,
    );

    return result.transaction;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function createTx(network: TronWeb, tx: Tx): Promise<any> {
    network.setAddress(tx.from);
    return await network.transactionBuilder.sendTrx(tx.to, Number(tx.amount), tx.from);
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function signTx(network: TronWeb, unsignedTx: any, privateKey: string): Promise<any> {
    return await network.trx.sign(unsignedTx, privateKey);
}
