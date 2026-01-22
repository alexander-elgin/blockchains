import type { ExplorerRequestDataField } from './types.js';

export default abstract class Explorer {
    abstract getData(address?: string): Record<string, ExplorerRequestDataField>;
    protected abstract getUri(address?: string): string;

    private readonly baseUrl: string;

    constructor(baseUrl: string) {
        this.baseUrl = baseUrl;
    }

    getMethod(): string {
        return 'GET';
    }

    getUrl(address?: string): string {
        return `${this.baseUrl}${this.getUri(address)}`;
    }
}
