import { Fun } from '../types/function';
import { Maybe } from '../types/maybe';

import { Nothing } from '../nothing';
import { Just } from '../just';

export function fmap<A, B>(mapFn: Fun<A, B>, input: Maybe<A>): Maybe<B> {
  return input instanceof Nothing
    ? new Nothing()
    : new Just<B>(mapFn(input.valueOf()));
}
