import type { TronScanBalanceResponse } from '../../blockchains/trx/explorers/balance/tron-scan/types.js';
import type { TronScanTokenBalanceResponse } from '../../blockchains/trx/explorers/balance/tron-scan-token/types.js';
import type { TronGridTokenTxListResponse } from '../../blockchains/trx/explorers/tx/tron-grid-token/types.js';
import type { TronGridTxListResponse } from '../../blockchains/trx/explorers/tx/tron-grid/types.js';
export type BalanceExplorerResponse = TronScanBalanceResponse | TronScanTokenBalanceResponse;
export type BalanceRawValue = string | undefined;
export type ExplorerRequestDataField = boolean | number | string;
export type TxListExplorerResponse = TronGridTokenTxListResponse | TronGridTxListResponse;
//# sourceMappingURL=types.d.ts.map