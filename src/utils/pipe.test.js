import assert from 'assert';

import pipe, { asyncPipe } from './pipe';

describe('pipe', () => {
  it('pipes data through functions', () => {
    const add1 = n => n + 1;
    const add2 = n => n + 2;

    assert.equal(pipe(1)(add1, add2), 4);
  });
});

describe('asyncPipe', () => {
  it('pipes promises', async () => {
    const add1Promise = n => new Promise(resolve => resolve(n + 1));
    const add2Promise = n => new Promise(resolve => resolve(n + 2));
    const add3 = n => n + 3;

    const result = await asyncPipe(1)(add1Promise, add2Promise, add3);

    assert.equal(result, 7);
  });
});
