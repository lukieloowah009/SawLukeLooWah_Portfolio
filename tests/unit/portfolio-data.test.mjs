import test from 'node:test';
import assert from 'node:assert/strict';
import { orderTimeline } from '../../src/lib/portfolio-data.mjs';

test('orders timeline by numeric order without mutating the source', () => {
  const entries = [
    { id: 'later', data: { order: 20 } },
    { id: 'first', data: { order: 1 } },
    { id: 'middle', data: { order: 10 } },
  ];

  const ordered = orderTimeline(entries);

  assert.deepEqual(ordered.map(({ id }) => id), ['first', 'middle', 'later']);
  assert.notEqual(ordered, entries);
  assert.deepEqual(entries.map(({ id }) => id), ['later', 'first', 'middle']);
});
