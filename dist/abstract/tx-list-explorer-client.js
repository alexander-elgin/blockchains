import axios from 'axios';
export default class TxListExplorerClient {
    parsePagination;
    parser;
    requestAdapter;
    constructor(explorer, parser, parsePagination) {
        this.requestAdapter = explorer;
        this.parser = parser;
        this.parsePagination = parsePagination;
    }
    async fetch(address, contract, options) {
        const method = this.requestAdapter.getMethod();
        return await axios({
            url: this.requestAdapter.getUrl(address, contract),
            method,
            [method.toLowerCase() === 'get' ? 'params' : 'data']: this.requestAdapter.getData(address, contract, options),
        });
    }
    async getData(address, contract, options) {
        const { data } = await this.fetch(address, contract, options);
        return {
            items: this.parser.parse(data),
            pagination: this.parsePagination(options?.pagination ?? { limit: this.getAllowedLimit(0) }, data),
        };
    }
    getAllowedLimit(limit) {
        return this.requestAdapter.getAllowedLimit(limit);
    }
}
//# sourceMappingURL=tx-list-explorer-client.js.map