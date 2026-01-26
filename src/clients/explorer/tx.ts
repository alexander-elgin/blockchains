import ExplorerClient from './general.js';

import type ExplorerRequestAdapter from '../../abstract/explorer/request-adapter.js';
import type TxExplorerResponseParser from '../../abstract/explorer/response-parser/tx.js';
import type { TxListExplorerResponse } from '../../abstract/explorer/types.js';
import type { ContractInfo } from '../../abstract/types.js';
import type Tx from '../../tx.js';

export default class TxListExplorerClient extends ExplorerClient {
    private readonly parser: TxExplorerResponseParser;

    constructor(explorer: ExplorerRequestAdapter, parser: TxExplorerResponseParser) {
        super(explorer);
        this.parser = parser;
    }

    async getData(address: string, contract?: ContractInfo): Promise<Array<Tx>> {
        const { data } = await this.fetch(address, contract);
        return this.parser.parse(<TxListExplorerResponse>data);
    }
}
