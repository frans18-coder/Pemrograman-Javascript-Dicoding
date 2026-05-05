import { test } from 'node:test';
import assert from 'node:assert';
import sum from './index.js';

test('fungsi sum harus mengembalikan hasil penjumlahan yang benar untuk angka positif', () => {
  assert.strictEqual(sum(2, 3), 5);
  assert.strictEqual(sum(0, 5), 5); // Menguji angka nol
  assert.strictEqual(sum(0, 0), 0);
});

test('fungsi sum harus mengembalikan 0 jika salah satu atau kedua input bukan number', () => {
  assert.strictEqual(sum('2', 3), 0);
  assert.strictEqual(sum(2, '3'), 0);
  assert.strictEqual(sum(null, 3), 0);
  assert.strictEqual(sum(undefined, 3), 0);
  assert.strictEqual(sum({}, 3), 0);
});

test('fungsi sum harus mengembalikan 0 jika salah satu atau kedua input adalah bilangan negatif', () => {
  assert.strictEqual(sum(-1, 5), 0);
  assert.strictEqual(sum(5, -1), 0);
  assert.strictEqual(sum(-1, -1), 0);
});