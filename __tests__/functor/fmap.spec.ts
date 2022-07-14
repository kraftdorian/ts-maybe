import { Maybe, Just, Nothing, fmap } from '../../src';

function add1(x: number): number {
  return x + 1;
}

describe('fmap', () => {
  test('returns Nothing if input is Nothing', () => {
    const numberNothing: Maybe<number> = new Nothing();
    expect(fmap(add1, numberNothing) instanceof Nothing).toBe(true);
  });

  test('returns Just if input is Just', () => {
    const numberJust: Maybe<number> = new Just(1);
    expect(fmap(add1, numberJust) instanceof Just).toBe(true);
  });

  test('returns mapped output from the Just input', () => {
    const x = 1;
    const numberJust: Maybe<number> = new Just(x);
    expect(fmap(add1, numberJust).valueOf()).toEqual(add1(x));
  });
});
