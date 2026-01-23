export default class Tx {
    amount: string;
    from: string;
    id: string;
    timestamp: Date;
    to: string;

    constructor({ amount, from, id, timestamp, to }: { amount: string, from: string, id: string, timestamp: Date, to: string, }) {
        this.amount = amount;
        this.from = from;
        this.id = id;
        this.timestamp = timestamp;
        this.to = to;
    }
}
