import { Maybe } from '../maybe';
import { pure } from '../functor/applicative';
import { Fun } from '../util/function';
import { Nothing } from '../nothing';

export function lift<A>(input: A): Maybe<A> {
  return pure(input);
}

export function bind<A, B>(input: Maybe<A>, mapFn: Fun<A, Maybe<B>>): Maybe<B> {
  return input instanceof Nothing ? new Nothing() : mapFn(input.valueOf());
}
