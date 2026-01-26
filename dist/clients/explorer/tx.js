import axios from 'axios';
import ExplorerClient from '../../abstract/explorer/client.js';
export class TxListExplorerGeneralClient extends ExplorerClient {
}
export class TxListExplorerClient extends TxListExplorerGeneralClient {
    explorer;
    parser;
    constructor(explorer, parser) {
        super();
        this.explorer = explorer;
        this.parser = parser;
    }
    async getData(address, contract) {
        const method = this.explorer.getMethod();
        const { data } = await axios({
            url: this.explorer.getUrl(address, contract),
            method,
            [method.toLowerCase() === 'get' ? 'params' : 'data']: this.explorer.getData(address, contract),
        });
        return this.parser.parse(data);
    }
}
export class TxListExplorerNullClient extends TxListExplorerGeneralClient {
    getData() {
        throw new Error('The method is not supported');
    }
}
//# sourceMappingURL=tx.js.map