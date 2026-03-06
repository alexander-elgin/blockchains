import type { ExplorerRequestDataField } from './types.js';
import type { ContractInfo, TxListOptions } from '../../types.js';

const DEFAULT_PAGINATION_LIMIT = 10;

export default abstract class ExplorerRequestAdapter {
    abstract getData(address?: string, contract?: ContractInfo, options?: TxListOptions):
        Record<string, ExplorerRequestDataField>;
    protected abstract getUri(address?: string, contract?: ContractInfo): string;

    private readonly baseUrl: string;
    private readonly maxLimit: number;

    constructor(baseUrl: string, maxLimit: number) {
        this.baseUrl = baseUrl;
        this.maxLimit = maxLimit;
    }

    getAllowedLimit(limit: number | undefined): number {
        return Math.max(1, Math.min(limit ?? DEFAULT_PAGINATION_LIMIT, this.maxLimit));
    }

    getMethod(): string {
        return 'GET';
    }

    getUrl(address?: string, contract?: ContractInfo): string {
        return `${this.baseUrl}${this.getUri(address, contract)}`;
    }
}
