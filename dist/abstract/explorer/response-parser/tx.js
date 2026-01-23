export default class TxListExplorerResponseParser {
    parse(data) {
        return this.parseList(data).map(this.parseItem);
    }
}
//# sourceMappingURL=tx.js.map