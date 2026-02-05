import axios from 'axios';
export default class TxListExplorerClient {
    parser;
    requestAdapter;
    constructor(explorer, parser) {
        this.requestAdapter = explorer;
        this.parser = parser;
    }
    async fetch(address, contract) {
        const method = this.requestAdapter.getMethod();
        return await axios({
            url: this.requestAdapter.getUrl(address, contract),
            method,
            [method.toLowerCase() === 'get' ? 'params' : 'data']: this.requestAdapter.getData(address, contract),
        });
    }
    async getData(address, contract) {
        const { data } = await this.fetch(address, contract);
        return this.parser.parse(data);
    }
}
//# sourceMappingURL=tx-list-explorer-client.js.map