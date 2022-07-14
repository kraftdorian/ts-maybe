import { Maybe, Just, Monad, Fun, lift } from '../../src';

describe('monad oop', () => {
  test('left identity', () => {
    const fun: Fun<number, Maybe<number>> = (x: number) => new Just(x + 1);
    const x = 1;
    const numberJust: Maybe<number> = new Just(x);
    const left = new Monad(numberJust).bind(fun);
    const right = fun(x);
    expect(left.toMaybe().valueOf()).toEqual(right.valueOf());
  });

  test('right identity', () => {
    const numberJust: Maybe<number> = new Just(1);
    expect(new Monad(numberJust).bind(lift).toMaybe().valueOf()).toEqual(
      numberJust.valueOf()
    );
  });

  test('associativity', () => {
    const numberJust: Maybe<number> = new Just(1);
    const funF: Fun<number, Maybe<number>> = (x: number) => new Just(x + 1);
    const funG: Fun<number, Maybe<string>> = (x: number) => new Just(String(x));
    const left = new Monad(numberJust).bind(funF).bind(funG);
    const right = new Monad(numberJust).bind((x) =>
      new Monad(funF(x)).bind(funG).toMaybe()
    );
    expect(left.toMaybe().valueOf()).toEqual(right.toMaybe().valueOf());
  });
});
