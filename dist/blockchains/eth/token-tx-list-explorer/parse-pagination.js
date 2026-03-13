export default function parsePagination({ limit, page = 1 }, res) {
    return { limit, page: page + (res.result.length < limit ? 0 : 1) };
}
//# sourceMappingURL=parse-pagination.js.map