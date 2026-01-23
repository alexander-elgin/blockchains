export function toNumberByDecimals(value, decimalsNumber) {
    const divider = BigInt(Math.pow(10, decimalsNumber));
    return Number(`${(value / divider).toString()}.${(value % divider).toString()}`);
}
//# sourceMappingURL=conversion.js.map