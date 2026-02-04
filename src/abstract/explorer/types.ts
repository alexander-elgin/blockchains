import type { TronGridTokenTxListResponse } from '../../blockchains/trx/token-tx-list-explorer/types.js';

export type ExplorerRequestDataField = boolean | number | string;
export type TxListExplorerResponse = TronGridTokenTxListResponse;
export type TxRawData = Record<string, string | number>;
