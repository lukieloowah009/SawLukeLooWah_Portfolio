/** @template {{ data: { order: number } }} T @param {T[]} entries @returns {T[]} */
export function orderTimeline(entries) {
  return [...entries].sort((a, b) => a.data.order - b.data.order);
}
