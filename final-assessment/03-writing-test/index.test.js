import { test } from 'node:test';
import assert from 'node:assert';
import { sum } from './index.js';

test('fungsi sum harus menjumlahkan dua angka dengan benar', () => {
  const result = sum(2, 3);
  const expected = 5;

  assert.strictEqual(result, expected);
});