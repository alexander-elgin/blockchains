import axios from 'axios';

import ExplorerClient from '../../abstract/explorer/client.js';

import type ExplorerRequestAdapter from '../../abstract/explorer/request-adapter.js';
import type TxExplorerResponseParser from '../../abstract/explorer/response-parser/tx.js';
import type { TxListExplorerResponse } from '../../abstract/explorer/types.js';
import type Tx from '../../tx.js';

export abstract class TxListExplorerGeneralClient extends ExplorerClient {
    abstract getData(address: string): Promise<Array<Tx>> | never;
}

export class TxListExplorerClient extends TxListExplorerGeneralClient {
    private readonly explorer: ExplorerRequestAdapter;
    private readonly parser: TxExplorerResponseParser;

    constructor(explorer: ExplorerRequestAdapter, parser: TxExplorerResponseParser) {
        super();
        this.explorer = explorer;
        this.parser = parser;
    }

    async getData(address: string): Promise<Array<Tx>> {
        const method = this.explorer.getMethod();

        const { data } = await axios({
            url: this.explorer.getUrl(address),
            method,
            [method.toLowerCase() === 'get' ? 'params' : 'data']: this.explorer.getData(address),
        });

        return this.parser.parse(<TxListExplorerResponse>data);
    }
}

export class TxListExplorerNullClient extends TxListExplorerGeneralClient {
    getData(): never {
        throw new Error('The method is not supported')
    }
}
