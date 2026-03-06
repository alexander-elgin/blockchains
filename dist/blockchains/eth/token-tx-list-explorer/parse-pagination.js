export default function parsePagination({ limit, page = 1 }) {
    return { limit, page: page + 1 };
}
//# sourceMappingURL=parse-pagination.js.map