import {
  Maybe,
  Just,
  Nothing,
  Fun,
  fmap,
  pure,
  applyMaybe,
  applyFmap,
} from '../../src';

describe('applicative', () => {
  describe('pure', () => {
    test('returns Just', () => {
      expect(pure(1) instanceof Just).toBe(true);
    });

    test('returns value wrapped in Just', () => {
      const x = 1;
      expect(pure(1).valueOf()).toEqual(x);
    });
  });

  describe('applyMaybe', () => {
    test('returns Nothing if mapFn is Nothing', () => {
      const mapFn: Maybe<Fun<number, number>> = new Nothing();
      const numberJust: Maybe<number> = new Just(1);
      expect(applyMaybe(mapFn, numberJust) instanceof Nothing).toBe(true);
    });

    test('returns fmap result if mapFn is Just', () => {
      const numberJust: Maybe<number> = new Just(1);
      const fun: Fun<number, number> = (x: number) => x + 1;
      const funJust: Maybe<Fun<number, number>> = new Just(fun);
      expect(applyMaybe(funJust, numberJust).valueOf()).toEqual(
        fmap(fun, numberJust).valueOf()
      );
    });
  });

  describe('applyFmap', () => {
    test('returns fmap result', () => {
      const stringJust: Maybe<string> = new Just('hello');
      const fun: Fun<string, string> = (x: string) => x + ' world!';
      expect(applyFmap(fun, stringJust).valueOf()).toEqual(
        fmap(fun, stringJust).valueOf()
      );
    });
  });
});
