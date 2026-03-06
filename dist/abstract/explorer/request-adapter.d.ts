import type { ExplorerRequestDataField } from './types.js';
import type { ContractInfo, TxListOptions } from '../../types.js';
export default abstract class ExplorerRequestAdapter {
    abstract getData(address?: string, contract?: ContractInfo, options?: TxListOptions): Record<string, ExplorerRequestDataField>;
    protected abstract getUri(address?: string, contract?: ContractInfo): string;
    private readonly baseUrl;
    private readonly maxLimit;
    constructor(baseUrl: string, maxLimit: number);
    getAllowedLimit(limit: number | undefined): number;
    getMethod(): string;
    getUrl(address?: string, contract?: ContractInfo): string;
}
//# sourceMappingURL=request-adapter.d.ts.map