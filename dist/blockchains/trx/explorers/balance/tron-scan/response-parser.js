import BalanceExplorerResponseParser from '../../../../../abstract/explorer/response-parser/balance.js';
export default class TronScanBalanceExplorerResponseParser extends BalanceExplorerResponseParser {
    parse(data) {
        for (const balanceRecord of data.balances) {
            if (balanceRecord.address === undefined) {
                return balanceRecord.balance;
            }
        }
    }
}
//# sourceMappingURL=response-parser.js.map