import { Just, Nothing, just, justM, nothing, nothingM } from '../../src';

describe('factory utils', () => {
  describe('just', () => {
    test('returns Just', () => {
      expect(just(1) instanceof Just).toBe(true);
    });
  });

  describe('nothing', () => {
    test('returns Nothing', () => {
      expect(nothing() instanceof Nothing).toBe(true);
    });
  });

  describe('justM', () => {
    test('returns Monad with Just', () => {
      expect(justM(1).toMaybe() instanceof Just).toBe(true);
    });

    test('returns Monad with wrapped Just input', () => {
      const x = 1;
      expect(justM(x).toMaybe().valueOf()).toEqual(x);
    });
  });

  describe('nothingM', () => {
    test('returns Monad with Nothing', () => {
      expect(nothingM().toMaybe() instanceof Nothing).toBe(true);
    });

    test('returns Monad with wrapped Nothing Symbol', () => {
      expect(typeof nothingM().toMaybe().valueOf()).toEqual('symbol');
    });
  });
});
