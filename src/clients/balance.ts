import axios from 'axios';

import ExplorerClient from '../abstract/client.js';

import type ExplorerRequestAdapter from '../abstract/request-adapter.js';
import type { BalanceParser } from '../abstract/parser/balance.js';
import type { BalanceExplorerResponse, BalanceRawValue } from '../abstract/types.js';

export abstract class BalanceExplorerGeneralClient extends ExplorerClient {
    abstract getData(address: string): Promise<BalanceRawValue> | never;
}

export class BalanceExplorerClient extends BalanceExplorerGeneralClient {
    private readonly explorer: ExplorerRequestAdapter;
    private readonly parser: BalanceParser;

    constructor(explorer: ExplorerRequestAdapter, parser: BalanceParser) {
        super();
        this.explorer = explorer;
        this.parser = parser;
    }

    async getData(address: string): Promise<BalanceRawValue> {
        const method = this.explorer.getMethod();

        const { data } = await axios({
            url: this.explorer.getUrl(address),
            method,
            [method.toLowerCase() === 'get' ? 'params' : 'data']: this.explorer.getData(address),
        });

        return this.parser.parse(<BalanceExplorerResponse>data);
    }
}

export class BalanceExplorerNullClient extends BalanceExplorerGeneralClient {
    getData(): never {
        throw new Error('The method is not supported')
    }
}
