import { Maybe } from '../types/maybe';
import { Fun } from '../types/function';

import { pure } from '../functor/applicative';

import { Nothing } from '../nothing';

export function lift<A>(input: A): Maybe<A> {
  return pure(input);
}

export function bind<A, B>(input: Maybe<A>, mapFn: Fun<A, Maybe<B>>): Maybe<B> {
  return input instanceof Nothing ? new Nothing() : mapFn(input.valueOf());
}
