import type { Tx } from './tx.js';
import type {
    BalanceExplorerRecord,
    ExplorerRawResponse,
    ExplorerRequestDataField,
    ExplorerResponse,
} from './types.js';

abstract class Explorer {
    abstract parseResponseWrapper(wrappedData: ExplorerRawResponse): ExplorerResponse;
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

export abstract class BalanceExplorer extends Explorer {
    abstract parseResponseItem(item: BalanceExplorerRecord): bigint;
}

export abstract class TxExplorer extends Explorer {
    abstract parseResponseItem(item: ExplorerRawResponse, digitsNumber: number): Tx;
}
