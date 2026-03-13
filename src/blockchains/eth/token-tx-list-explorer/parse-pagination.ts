import type { EtherscanResponse } from './types.js';
import type { Pagination } from '../../../types.js';

export default function parsePagination ({ limit, page = 1}: Pagination, res: EtherscanResponse): Pagination {
    return { limit, page: page + (res.result.length < limit ? 0 : 1) };
}
