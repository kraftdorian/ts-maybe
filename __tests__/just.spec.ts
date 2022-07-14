import { Just } from '../src';

describe('Just', () => {
  test('valueOf returns the wrapped value', () => {
    const x = 'foo';
    const stringJust = new Just(x);
    expect(stringJust.valueOf()).toEqual(x);
  });
});
