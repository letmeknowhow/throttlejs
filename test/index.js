import chai from 'chai';
import { throttle, debounce } from '../src/index';

describe('throttle', () => {
  const func = () => {};
  const wrapped = throttle(func, 500);

  it('must return a function', () => {
    chai.assert.isFunction(wrapped);
  });
});

describe('debounce', () => {
  const func = () => {};
  const wrapped = debounce(func, 500);

  it('must return a function', () => {
    chai.assert.isFunction(wrapped);
  });
});
