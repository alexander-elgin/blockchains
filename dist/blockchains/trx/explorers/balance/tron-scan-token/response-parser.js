import BalanceExplorerResponseParser from '../../../../../abstract/explorer/response-parser/balance.js';
export default class TronScanTokenBalanceExplorerResponseParser extends BalanceExplorerResponseParser {
    parse(data, contract) {
        for (const balanceRecord of data.tokens) {
            if (balanceRecord.tokenId === contract?.address && balanceRecord.tokenType === contract?.type) {
                return balanceRecord.balance;
            }
        }
    }
}
//# sourceMappingURL=response-parser.js.map