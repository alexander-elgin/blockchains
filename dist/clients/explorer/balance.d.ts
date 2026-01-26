import ExplorerClient from './general.js';
import type { BalanceClient } from '../types.js';
import type ExplorerRequestAdapter from '../../abstract/explorer/request-adapter.js';
import type BalanceExplorerResponseParser from '../../abstract/explorer/response-parser/balance.js';
import type { BalanceRawValue } from '../../abstract/explorer/types.js';
export default class BalanceExplorerClient extends ExplorerClient implements BalanceClient {
    private readonly parser;
    constructor(explorer: ExplorerRequestAdapter, parser: BalanceExplorerResponseParser);
    getData(address: string): Promise<BalanceRawValue>;
}
//# sourceMappingURL=balance.d.ts.map