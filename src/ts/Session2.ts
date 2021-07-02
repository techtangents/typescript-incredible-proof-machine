import {Pair, todo} from "./Data";

export const e01 = <A, B> (a: A, f: (a: A) => B): B => todo();

export const e02 = <A, B, C> (a: A, f: (a: A) => B, g: (b: B) => C): C => todo();

export const e03 = <A, B, C, D> (a: A, f: (a: A) => B, g: (b: B) => C, h: (c: C) => D): D => todo();

export const e04 = <A> (a: A, f: (a: A) => A): A => todo();

// aka function composition
export const e05 = <A, B, C> (f: (a: A) => B, g: (b: B) => C) => (a: A): C => todo();

export const e06 = <A, B, C> (f: (a: A) => B, g: (a: A) => (b: B) => C) => (a: A): C => todo();

export const e07 = <A> () => (a: A): A => todo();

export const e08 = <A, B, C> (f: (a: A) => C, g: (b: B) => C, p: Pair<A, B>): C => todo();

export const e09 = <A, B, C> (f: (a: A) => C, g: (b: B) => C) => (p: Pair<A, B>): C => todo();

export const e10 = <A, B> (b: B) => (a: A): B => todo();

// For q11 and q12, there are two variants:
// - variant 'a' use a Pair
// - variant 'b' uses an argument list

// aka currying
export const e11a = <A, B, C> (f: (p: Pair<A, B>) => C) => (a: A) => (b: B): C => todo();

// aka currying
export const e11b = <A, B, C> (f: (a: A, b: B) => C) => (a: A) => (b: B): C => todo();

// aka uncurrying
export const e12a = <A, B, C> (f: (a: A) => (b: B) => C) => (p: Pair<A, B>): C => todo();

// aka uncurrying
export const e12b = <A, B, C> (f: (a: A) => (b: B) => C) => (a: A, b: B): C => todo();

export const e13 = <A, B, C> (p: Pair<(a: A) => B, (a: A) => C>) => (a: A): Pair<B, C> => todo();

export const e14 = <A, B, C> (f: (a: A) => (a: A) => B, g: (h: (a: A) => B) => A) => todo();
