import Tx from '../../../../../tx.js';
import TxListExplorerResponseParser from '../../../../../abstract/explorer/response-parser/tx.js';
export default class TronScanBalanceExplorerResponseParser extends TxListExplorerResponseParser {
    parseList(res) {
        return res.data.filter((txData) => txData.raw_data.contract
            .find((params) => params.type === 'TransferContract'));
    }
    parseItem(tx) {
        const receipt = tx.raw_data.contract.reduce((res, params) => Object.assign({}, res, params.parameter.value), { amount: -1, owner_address: '', to_address: '' });
        return new Tx({
            amount: receipt.amount,
            from: receipt.owner_address,
            id: tx.txID,
            timestamp: new Date(tx.block_timestamp),
            to: receipt.to_address,
        });
    }
}
//# sourceMappingURL=response-parser.js.map