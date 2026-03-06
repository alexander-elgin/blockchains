import type { Pagination } from '../../../types.js';

type TrxListResponseMeta = { meta: { fingerprint: string } };

export default function parse ({ limit }: Pagination, { meta: { fingerprint } }: TrxListResponseMeta): Pagination {
    return { limit, fingerprint };
}
