import type { ExplorerRequestDataField } from './types.js';
import type { ContractInfo } from '../types.js';
export default abstract class ExplorerRequestAdapter {
    abstract getData(address?: string, contract?: ContractInfo): Record<string, ExplorerRequestDataField>;
    protected abstract getUri(address?: string, contract?: ContractInfo): string;
    private readonly baseUrl;
    constructor(baseUrl: string);
    getMethod(): string;
    getUrl(address?: string, contract?: ContractInfo): string;
}
//# sourceMappingURL=request-adapter.d.ts.map