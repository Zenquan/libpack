import { expect, test } from 'vitest';
import { test2 } from '../src';
// Edit an assertion and save to see HMR in action

test('test2', () => {
  expect(test2(1, 2, 3).join()).equal('1,2,3');
});
