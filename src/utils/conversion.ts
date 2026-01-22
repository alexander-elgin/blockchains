export function toNumberByDecimals(value: bigint, decimalsNumber: number): number {
    const divider = BigInt(Math.pow(10, decimalsNumber));
    return Number(`${(value / divider).toString()}.${(value % divider).toString()}`);
}
