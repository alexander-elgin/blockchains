export default class Tx {
    amount;
    from;
    id;
    timestamp;
    to;
    constructor({ amount, from, id, timestamp, to }) {
        this.amount = amount;
        this.from = from;
        this.id = id;
        this.timestamp = timestamp;
        this.to = to;
    }
}
//# sourceMappingURL=tx.js.map