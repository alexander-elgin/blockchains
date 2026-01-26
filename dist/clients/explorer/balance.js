import ExplorerClient from './general.js';
export default class BalanceExplorerClient extends ExplorerClient {
    parser;
    constructor(explorer, parser) {
        super(explorer);
        this.parser = parser;
    }
    async getData(address) {
        const { data } = await this.fetch(address);
        return this.parser.parse(data);
    }
}
//# sourceMappingURL=balance.js.map