export default class Tx {
    amount: number | string;
    from: string;
    id: string | undefined;
    timestamp: Date;
    to: string;

    constructor({ amount, from, id, timestamp, to }: {
        amount: number | string,
        from: string,
        id?: string,
        timestamp: Date,
        to: string,
    }) {
        this.amount = amount;
        this.from = from;
        this.id = id;
        this.timestamp = timestamp;
        this.to = to;
    }
}
