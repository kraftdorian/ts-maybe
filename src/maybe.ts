import { Just } from './just';
import { Nothing } from './nothing';

export type Maybe<A> = Just<A> | Nothing;
