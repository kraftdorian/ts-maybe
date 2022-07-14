import { Nothing } from '../nothing';
import { pure } from '../functor/applicative';
import { Monad } from '../monad/oop';
import { Maybe } from '../types/maybe';

export function just<A>(input: A): Maybe<A> {
  return pure<A>(input);
}

export function nothing<A>(): Maybe<A> {
  return new Nothing();
}

export function justM<A>(input: A): Monad<A> {
  return new Monad<A>(just<A>(input));
}

export function nothingM<A>(): Monad<A> {
  return new Monad<A>(nothing<A>());
}
