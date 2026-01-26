import ExplorerClient from './general.js';

import type { BalanceClient } from '../types.js';
import type ExplorerRequestAdapter from '../../abstract/explorer/request-adapter.js';
import type BalanceExplorerResponseParser from '../../abstract/explorer/response-parser/balance.js';
import type { BalanceExplorerResponse, BalanceRawValue } from '../../abstract/explorer/types.js';

export default class BalanceExplorerClient extends ExplorerClient implements BalanceClient {
    private readonly parser: BalanceExplorerResponseParser;

    constructor(explorer: ExplorerRequestAdapter, parser: BalanceExplorerResponseParser) {
        super(explorer);
        this.parser = parser;
    }

    async getData(address: string): Promise<BalanceRawValue> {
        const { data } = await this.fetch(address);
        return this.parser.parse(<BalanceExplorerResponse>data);
    }
}
