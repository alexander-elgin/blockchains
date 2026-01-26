export default class Tx {
    amount: number | string;
    from: string;
    id: string;
    timestamp: Date;
    to: string;
    constructor({ amount, from, id, timestamp, to }: {
        amount: number | string;
        from: string;
        id: string;
        timestamp: Date;
        to: string;
    });
}
//# sourceMappingURL=tx.d.ts.map