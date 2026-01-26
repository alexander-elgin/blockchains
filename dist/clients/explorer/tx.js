import ExplorerClient from './general.js';
export default class TxListExplorerClient extends ExplorerClient {
    parser;
    constructor(explorer, parser) {
        super(explorer);
        this.parser = parser;
    }
    async getData(address, contract) {
        const { data } = await this.fetch(address, contract);
        return this.parser.parse(data);
    }
}
//# sourceMappingURL=tx.js.map