import {Pair, todo} from './Data';

const e01 = <A> (a: A): A => todo();

const e02 = <A, B> (a: A, b: B): A => todo();

const e03 = <A, B> (a: A, b: B): B => todo();

const e04 = <A, B> (a: A, b: B): Pair<A, B> => todo();

const e05 = <A> (a: A): Pair<A, A> => todo();

// hint: destructure params in the param lists

const e06 = <A, B> (p: Pair<A, B>): A => todo();

const e07a = <A, B> (p: Pair<A, B>): A => todo();

const e07b = <A, B> (p: Pair<A, B>): B => todo();

const e08 = <A, B> (p: Pair<A, B>): Pair<A, B> => todo();

const e09 = <A, B> (p: Pair<A, B>): Pair<B, A> => todo();

const e10a = <A, B, C> (p: Pair<Pair<A, B>, C>): A => todo();

const e10b = <A, B, C> (p: Pair<Pair<A, B>, C>): B => todo();

const e10c = <A, B, C> (p: Pair<Pair<A, B>, C>): C => todo();

const e11 = <A, B, C> (p: Pair<Pair<A, B>, C>): Pair<A, C> => todo();

const e12 = <A, B, C> (p: Pair<Pair<A, B>, C>): Pair<A, Pair<B, C>> => todo();

