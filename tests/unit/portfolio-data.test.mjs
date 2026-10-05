import test from 'node:test';
import assert from 'node:assert/strict';
import { getPublishedProject, orderTimeline } from '../../src/lib/portfolio-data.mjs';

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

test('selects a published project by id', () => {
  const draft = { id: 'featured', data: { status: 'draft' } };
  const published = { id: 'featured', data: { status: 'published' } };
  const other = { id: 'other', data: { status: 'published' } };

  assert.equal(getPublishedProject([draft, published, other], 'featured'), published);
});

test('returns undefined when the requested project is missing or unpublished', () => {
  assert.equal(getPublishedProject([{ id: 'featured', data: { status: 'draft' } }], 'featured'), undefined);
  assert.equal(getPublishedProject([], 'missing'), undefined);
});
