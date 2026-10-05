/** @template {{ data: { order: number } }} T @param {T[]} entries @returns {T[]} */
export function orderTimeline(entries) {
  return [...entries].sort((a, b) => a.data.order - b.data.order);
}

/** @template {{ id: string, data: { status: string } }} T @param {T[]} entries @param {string} id @returns {T | undefined} */
export function getPublishedProject(entries, id) {
  return entries.find((entry) => entry.id === id && entry.data.status === 'published');
}
