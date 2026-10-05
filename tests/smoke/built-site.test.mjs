import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';

const home = await readFile(new URL('../../dist/index.html', import.meta.url), 'utf8');
const notFound = await readFile(new URL('../../dist/404.html', import.meta.url), 'utf8');

test('production homepage contains the expected portfolio chapters', () => {
  for (const id of ['main', 'build', 'journey', 'think', 'life']) {
    assert.match(home, new RegExp(`\\bid="${id}"`), `expected #${id} section`);
  }
  assert.doesNotMatch(home, /\bid="now"|>Now</i);
});

test('local hash links resolve to an element on the homepage', () => {
  const ids = new Set([...home.matchAll(/\bid="([^"]+)"/g)].map((match) => match[1]));
  const hrefs = [...home.matchAll(/\bhref="#([^"#]+)"/g)].map((match) => match[1]);
  assert.ok(hrefs.length > 0, 'expected in-page navigation links');
  for (const href of hrefs) assert.ok(ids.has(href), `#${href} has no target`);
});

test('homepage includes the key story and journey details', () => {
  for (const phrase of [
    'I build systems.',
    'A control plane for tens of thousands of tenants',
    '$5M+ USD',
    'GCP',
    'West Europe',
    'Flekke, Norway',
  ]) {
    assert.ok(home.includes(phrase), `expected homepage to include: ${phrase}`);
  }
});

test('production 404 page offers a clear route back home', () => {
  assert.match(notFound, /doesn’t resolve/i);
  assert.match(notFound, /href="\/SawLukeLooWah_Portfolio\/"[^>]*>Return to the archive/i);
});

test('production assets and section links use the GitHub Pages project path', () => {
  assert.match(home, /href="\/SawLukeLooWah_Portfolio\/_astro\//);
  assert.match(home, /href="\/SawLukeLooWah_Portfolio\/favicon\.svg"/);
});
