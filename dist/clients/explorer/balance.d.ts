import ExplorerClient from '../../abstract/explorer/client.js';
import type ExplorerRequestAdapter from '../../abstract/explorer/request-adapter.js';
import type BalanceExplorerResponseParser from '../../abstract/explorer/response-parser/balance.js';
import type { BalanceRawValue } from '../../abstract/explorer/types.js';
export declare abstract class BalanceExplorerGeneralClient extends ExplorerClient {
    abstract getData(address: string): Promise<BalanceRawValue> | never;
}
export declare class BalanceExplorerClient extends BalanceExplorerGeneralClient {
    private readonly explorer;
    private readonly parser;
    constructor(explorer: ExplorerRequestAdapter, parser: BalanceExplorerResponseParser);
    getData(address: string): Promise<BalanceRawValue>;
}
export declare class BalanceExplorerNullClient extends BalanceExplorerGeneralClient {
    getData(): never;
}
//# sourceMappingURL=balance.d.ts.map