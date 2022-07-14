import { Maybe } from '../maybe';
import { Fun } from '../util/function';
import { bind } from './base';

export class Monad<A> {
  constructor(private readonly _value: Maybe<A>) {}

  bind<B>(mapFn: Fun<A, Maybe<B>>) {
    return new Monad<B>(bind(this._value, mapFn));
  }

  toMaybe(): Maybe<A> {
    return this._value;
  }
}
