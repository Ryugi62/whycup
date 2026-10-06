const assert = require('assert');
const { computeType, LENSES } = require('./type.js');
// 결정적
assert.deepStrictEqual(computeType({ q1: 'just', q2: 'rit', q3: 'rit', q4: 0 }), computeType({ q1: 'just', q2: 'rit', q3: 'rit', q4: 0 }));
// 다수 관점
assert.strictEqual(computeType({ q1: 'just', q2: 'spa', q3: 'spa', q4: 1 }).type, '카페 오피스러');
// 동률 → q1 관점, q1이 그냥이면 q3
assert.strictEqual(computeType({ q1: 'con', q2: 'tas', q3: 'con', q4: 2 }).lens, 'con');
assert.strictEqual(computeType({ q1: 'just', q2: 'tas', q3: 'spa', q4: 0 }).lens, 'spa');
assert.strictEqual(computeType({ q1: 'just', q2: 'rit', q3: 'rit', q4: 0 }).wasJust, true);
// 12유형 전부 도달
const seen = new Set();
for (const k of ['rit','tas','spa','con']) for (const s of [0,1,2]) seen.add(computeType({ q1: 'just', q2: k, q3: k, q4: s }).type);
assert.strictEqual(seen.size, 12);
assert.strictEqual(computeType({ q1: 'spa', q2: 'tas', q3: 'spa', q4: 1 }).lens, 'spa');
console.log('OK 7 assertions — 12 types reachable');
