import {Pair, todo} from './Data';

// aka the identity function
export const e01 = <A> (a: A): A => todo();

export const e02 = <A, B> (a: A, b: B): A => todo();

export const e03 = <A, B> (a: A, b: B): B => todo();

export const e04 = <A, B> (a: A, b: B): Pair<A, B> => todo();

export const e05 = <A> (a: A): Pair<A, A> => todo();

// hint: destructure params in the param lists

export const e06 = <A, B> (p: Pair<A, B>): A => todo();

export const e07a = <A, B> (p: Pair<A, B>): A => todo();

export const e07b = <A, B> (p: Pair<A, B>): B => todo();

export const e08 = <A, B> (p: Pair<A, B>): Pair<A, B> => todo();

// sometimes called "flip"
export const e09 = <A, B> (p: Pair<A, B>): Pair<B, A> => todo();

export const e10a = <A, B, C> (p: Pair<Pair<A, B>, C>): A => todo();

export const e10b = <A, B, C> (p: Pair<Pair<A, B>, C>): B => todo();

export const e10c = <A, B, C> (p: Pair<Pair<A, B>, C>): C => todo();

export const e11 = <A, B, C> (p: Pair<Pair<A, B>, C>): Pair<A, C> => todo();

export const e12 = <A, B, C> (p: Pair<Pair<A, B>, C>): Pair<A, Pair<B, C>> => todo();

