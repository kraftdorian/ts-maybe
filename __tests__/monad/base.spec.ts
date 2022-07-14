import { Maybe, Just, Fun, lift, bind, pure } from '../../src';

describe('monad base', () => {
  describe('lift', () => {
    test('returns applicative pure result', () => {
      expect(lift(1).valueOf()).toEqual(pure(1).valueOf());
    });
  });

  test('left identity', () => {
    const fun: Fun<number, Maybe<number>> = (x: number) => new Just(x + 1);
    const x = 1;
    expect(bind(lift(x), fun).valueOf()).toEqual(fun(x).valueOf());
  });

  test('right identity', () => {
    const stringJust: Maybe<string> = new Just('hello!');
    expect(bind(stringJust, lift).valueOf()).toEqual(stringJust.valueOf());
  });

  test('associativity', () => {
    const numberJust: Maybe<number> = new Just(1);
    const funF: Fun<number, Maybe<number>> = (x: number) => new Just(x + 1);
    const funG: Fun<number, Maybe<string>> = (x: number) => new Just(String(x));
    const left = bind(bind(numberJust, funF), funG);
    const right = bind(numberJust, (x) => bind(funF(x), funG));
    expect(left.valueOf()).toEqual(right.valueOf());
  });
});
