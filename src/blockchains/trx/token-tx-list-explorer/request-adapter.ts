import ExplorerRequestAdapter from '../../../abstract/explorer/request-adapter.js';

import type { ContractInfo } from '../../../abstract/types.js';

const MAX_ALLOWED_TXS_NUMBER_PER_REQUEST = 200;

export default class TronGridTokenTxListExplorerRequestAdapter extends ExplorerRequestAdapter {
    getData(address: string, contract: ContractInfo) {
        return {
            contract_address: contract.address,
            limit: MAX_ALLOWED_TXS_NUMBER_PER_REQUEST,
            only_confirmed: true,
        };
    }

    protected getUri(address: string, contract: ContractInfo): string {
        return `/v1/accounts/${address}/transactions/${contract.type}`;
    }
}
