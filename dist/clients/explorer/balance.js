import ExplorerClient from './general.js';
export default class BalanceExplorerClient extends ExplorerClient {
    parser;
    constructor(explorer, parser) {
        super(explorer);
        this.parser = parser;
    }
    async getData(address, contract) {
        const { data } = await this.fetch(address, contract);
        return this.parser.parse(data, contract);
    }
}
//# sourceMappingURL=balance.js.map