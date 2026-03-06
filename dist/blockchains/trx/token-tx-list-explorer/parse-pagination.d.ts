import type { Pagination } from '../../../types.js';
type TrxListResponseMeta = {
    meta: {
        fingerprint: string;
    };
};
export default function parse({ limit }: Pagination, { meta: { fingerprint } }: TrxListResponseMeta): Pagination;
export {};
//# sourceMappingURL=parse-pagination.d.ts.map