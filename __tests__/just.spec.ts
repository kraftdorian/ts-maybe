import { Just, Nothing } from '../src';

describe('Just', () => {
  test('valueOf returns the wrapped value', () => {
    const x = 'foo';
    const stringJust = new Just(x);
    expect(stringJust.valueOf()).toEqual(x);
  });

  test('Just Nothing is not equal to Nothing', () => {
    const nothingJust = new Just(new Nothing());
    const nothing = new Nothing();
    expect(nothingJust.valueOf()).not.toEqual(nothing.valueOf());
  });
});
