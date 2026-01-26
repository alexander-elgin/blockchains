import axios from 'axios';
import BlockchainClient from '../../abstract/client.js';
export default class ExplorerClient extends BlockchainClient {
    requestAdapter;
    constructor(explorer) {
        super();
        this.requestAdapter = explorer;
    }
    async fetch(address, contract) {
        const method = this.requestAdapter.getMethod();
        return await axios({
            url: this.requestAdapter.getUrl(address, contract),
            method,
            [method.toLowerCase() === 'get' ? 'params' : 'data']: this.requestAdapter.getData(address, contract),
        });
    }
}
//# sourceMappingURL=general.js.map