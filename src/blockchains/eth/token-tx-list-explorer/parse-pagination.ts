import type { Pagination } from '../../../types.js';

export default function parsePagination ({ limit, page = 1}: Pagination): Pagination {
    return { limit, page: page + 1 };
}
