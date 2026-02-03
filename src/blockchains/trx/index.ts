import { TronWeb } from 'tronweb';

import TronTokenTxCreator from './token-tx-creator/index.js';
import TronTxAcceptanceValidator from './tx-acceptance-validator/index.js';
import TronTxCreator from './tx-creator/index.js';
import TronTxSigner from './tx-signer/index.js';
import { isAddressValid } from './utils/index.js';

import type Blockchain from '../../abstract/blockchain.js';
import type { ContractInfo } from '../../abstract/types.js';
import type Tx from '../../tx.js';

export default class TrxBlockchain implements Blockchain {
    private readonly tokenTxCreator: TronTokenTxCreator;
    private readonly txAcceptanceValidator: TronTxAcceptanceValidator;
    private readonly txCreator: TronTxCreator;
    private readonly signer: TronTxSigner;

    constructor(explorerUrl: string) {
        const tronWeb = new TronWeb({ fullHost: explorerUrl });
        this.tokenTxCreator = new TronTokenTxCreator(tronWeb);
        this.txAcceptanceValidator = new TronTxAcceptanceValidator(tronWeb);
        this.txCreator = new TronTxCreator(tronWeb);
        this.signer = new TronTxSigner(tronWeb);
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    async createTx(tx: Tx, contract?: ContractInfo): Promise<any> {
        return await (contract === undefined ? this.txCreator.createTx(tx) : this.tokenTxCreator.createTx(tx, contract));
    }

    isAddressValid(address: string): boolean {
        return isAddressValid(address);
    }

    async isTxAccepted(txId: string, contract?: ContractInfo): Promise<boolean> {
        return await this.txAcceptanceValidator.isTxAccepted(txId, contract);
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    async signTx(unsignedTransaction: any, privateKey: string): Promise<any> {
        return await this.signer.signTx(unsignedTransaction, privateKey);
    }
}
