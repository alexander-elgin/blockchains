import ExplorerResponseParser from './general.js';
export default class TxListExplorerResponseParser extends ExplorerResponseParser {
    parse(data) {
        return this.parseList(data).map(this.parseItem);
    }
}
//# sourceMappingURL=tx.js.map