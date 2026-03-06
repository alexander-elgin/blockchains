const DEFAULT_PAGINATION_LIMIT = 10;
export default class ExplorerRequestAdapter {
    baseUrl;
    maxLimit;
    constructor(baseUrl, maxLimit) {
        this.baseUrl = baseUrl;
        this.maxLimit = maxLimit;
    }
    getAllowedLimit(limit) {
        return Math.max(1, Math.min(limit ?? DEFAULT_PAGINATION_LIMIT, this.maxLimit));
    }
    getMethod() {
        return 'GET';
    }
    getUrl(address, contract) {
        return `${this.baseUrl}${this.getUri(address, contract)}`;
    }
}
//# sourceMappingURL=request-adapter.js.map