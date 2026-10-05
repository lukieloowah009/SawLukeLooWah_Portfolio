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
  assert.match(home, /SAW LUKE LOO \(LUKE\) WAH/);
  assert.match(home, /aria-label="Saw Luke Loo \(Luke\) Wah, home"/);
});

test('local hash links resolve to an element on the homepage', () => {
  const ids = new Set([...home.matchAll(/\bid="([^"]+)"/g)].map((match) => match[1]));
  const hrefs = [...home.matchAll(/\bhref="#([^"#]+)"/g)].map((match) => match[1]);
  assert.ok(hrefs.length > 0, 'expected in-page navigation links');
  for (const href of hrefs) assert.ok(ids.has(href), `#${href} has no target`);
});

test('homepage includes the high-level Build summary and journey details', () => {
  for (const phrase of [
    'I build systems.',
    'Tens of thousands',
    'Multi-cloud',
    'Flekke, Norway',
  ]) {
    assert.ok(home.includes(phrase), `expected homepage to include: ${phrase}`);
  }
});

test('detailed Field Story is absent from the public homepage', () => {
  for (const phrase of ['FIELD STORY / 01', 'THE CHALLENGE', 'THE CONSTRAINTS', 'THE SYSTEM', 'THE IMPACT', 'A control plane for tens of thousands of tenants']) {
    assert.ok(!home.includes(phrase), `unexpected public story content: ${phrase}`);
  }
});

test('production 404 page offers a clear route back home', () => {
  assert.match(notFound, /doesn’t resolve/i);
  assert.match(notFound, /href="\/"[^>]*>Return to the archive/i);
});

test('production assets use the custom-domain root path', () => {
  assert.match(home, /href="\/_astro\//);
  assert.match(home, /href="\/favicon\.svg"/);
});
