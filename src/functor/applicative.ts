import { Maybe } from '../maybe';
import { Just } from '../just';
import { Fun } from '../util/function';
import { Nothing } from '../nothing';
import { fmap } from './fmap';

export function pure<A>(input: A): Maybe<A> {
  return new Just<A>(input);
}

export function applyMaybe<A, B>(
  mapFn: Maybe<Fun<A, B>>,
  input: Maybe<A>
): Maybe<B> {
  return mapFn instanceof Nothing
    ? new Nothing()
    : fmap<A, B>(mapFn.valueOf(), input);
}

export function applyFmap<A, B>(mapFn: Fun<A, B>, input: Maybe<A>): Maybe<B> {
  return fmap<A, B>(mapFn, input);
}
