import type { ExplorerRequestDataField } from './types.js';
export default abstract class ExplorerRequestAdapter {
    abstract getData(address?: string): Record<string, ExplorerRequestDataField>;
    protected abstract getUri(address?: string): string;
    private readonly baseUrl;
    constructor(baseUrl: string);
    getMethod(): string;
    getUrl(address?: string): string;
}
//# sourceMappingURL=request-adapter.d.ts.map