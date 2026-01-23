export default class ExplorerRequestAdapter {
    baseUrl;
    constructor(baseUrl) {
        this.baseUrl = baseUrl;
    }
    getMethod() {
        return 'GET';
    }
    getUrl(address) {
        return `${this.baseUrl}${this.getUri(address)}`;
    }
}
//# sourceMappingURL=request-adapter.js.map