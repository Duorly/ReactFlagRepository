export function paginate(items, page, limit) {
  const start = (page - 1) * limit;
  return items.slice(start, start + limit);
}

export function calculateTotalPages(itemsCount, limit) {
  return Math.ceil(itemsCount / limit) || 1;
}

export function infiniteScroll(items, limit) {
  return items.slice(0, limit);
}
