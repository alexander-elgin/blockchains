import axios from 'axios';
import ExplorerClient from '../../abstract/explorer/client.js';
export class BalanceExplorerGeneralClient extends ExplorerClient {
}
export class BalanceExplorerClient extends BalanceExplorerGeneralClient {
    explorer;
    parser;
    constructor(explorer, parser) {
        super();
        this.explorer = explorer;
        this.parser = parser;
    }
    async getData(address) {
        const method = this.explorer.getMethod();
        const { data } = await axios({
            url: this.explorer.getUrl(address),
            method,
            [method.toLowerCase() === 'get' ? 'params' : 'data']: this.explorer.getData(address),
        });
        return this.parser.parse(data);
    }
}
export class BalanceExplorerNullClient extends BalanceExplorerGeneralClient {
    getData() {
        throw new Error('The method is not supported');
    }
}
//# sourceMappingURL=balance.js.map