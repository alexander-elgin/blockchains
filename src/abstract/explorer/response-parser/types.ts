import type { TronGridTxRawData } from '../../../blockchains/trx/explorers/tx/tron-grid/types.js';

export type TxRawData = Record<string, string | number | TronGridTxRawData>;
