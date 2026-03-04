import { TronWeb } from 'tronweb';

import Blockchain from '../../abstract/blockchain.js';
import TxListExplorerClient from '../../abstract/tx-list-explorer-client.js';
import TronGridTokenTxListExplorerRequestAdapter from './token-tx-list-explorer/request-adapter.js';
import TronGridTokenTxListExplorerResponseParser from './token-tx-list-explorer/response-parser.js';
import { createTokenTx, createTx, getSignTxUrl, isAddressActive, isAddressValid, signTx } from './utils/index.js';

import type { AddressValidator, TokenTxCreator, TxCreator, TxRouter, TxSigner } from '../../abstract/blockchain.js';
import type { ContractInfo } from '../../abstract/types.js';
import type Tx from '../../tx.js';

export default class TrxBlockchain extends Blockchain implements
    AddressValidator,
    TokenTxCreator,
    TxCreator,
    TxRouter,
    TxSigner
{
    private readonly network: TronWeb;

    constructor(explorerUrl: string) {
        super(new TxListExplorerClient(new TronGridTokenTxListExplorerRequestAdapter(explorerUrl),
            new TronGridTokenTxListExplorerResponseParser()));
        this.network = new TronWeb({ fullHost: explorerUrl });
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    async createTokenTx(tx: Tx, contract: ContractInfo): Promise<any> {
        return await createTokenTx(this.network, tx, contract);
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    async createTx(tx: Tx): Promise<any> {
        return await createTx(this.network, tx);
    }

    async getCreateTokenTxUrl(tx: Tx, contract: ContractInfo, callbackUrl = ''): Promise<string> {
        return getSignTxUrl(await this.createTokenTx(tx, contract), callbackUrl)
    }

    async isAddressActive(address: string): Promise<boolean> {
        return await isAddressActive(this.network, address);
    }

    isAddressValid(address: string): boolean {
        return isAddressValid(address);
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    async signTx(unsignedTx: any, privateKey: string): Promise<any> {
        return await signTx(this.network, unsignedTx, privateKey);
    }
}
