export default class ExplorerRequestAdapter {
    baseUrl;
    constructor(baseUrl) {
        this.baseUrl = baseUrl;
    }
    getMethod() {
        return 'GET';
    }
    getUrl(address, contract) {
        return `${this.baseUrl}${this.getUri(address, contract)}`;
    }
}
//# sourceMappingURL=request-adapter.js.map