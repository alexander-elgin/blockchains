import type { ExplorerRequestDataField } from './types.js';
import type { ContractInfo } from '../types.js';

export default abstract class ExplorerRequestAdapter {
    abstract getData(address?: string, contract?: ContractInfo): Record<string, ExplorerRequestDataField>;
    protected abstract getUri(address?: string, contract?: ContractInfo): string;

    private readonly baseUrl: string;

    constructor(baseUrl: string) {
        this.baseUrl = baseUrl;
    }

    getMethod(): string {
        return 'GET';
    }

    getUrl(address?: string, contract?: ContractInfo): string {
        return `${this.baseUrl}${this.getUri(address, contract)}`;
    }
}
