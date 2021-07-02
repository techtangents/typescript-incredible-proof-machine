export type Pair<A, B> = [A, B];

export const pair = <A, B> (a: A, b: B): Pair<A, B> => [a, b];

export const first = <A, B> ([a]: Pair<A, B>): A => a;

export const second = <A, B> ([a, b]: Pair<A, B>): B => b;

export type Unit = null;

export const unit = null;

export type Left<A> = {
    readonly tag: 'Left';
    readonly left: A;
};

export type Right<B> = {
    readonly tag: 'Right';
    readonly right: B;
};

export type Either<A, B> = Left<A> | Right<B>;

const left = <A> (left: A): Left<A> => ({ tag: 'Left', left });

const right = <B> (right: B): Right<B> => ({ tag: 'Right', right });

const foldE = <A, B, T> (e: Either<A, B>, ifLeft: (a: A) => T, ifRight: (b: B) => T): T =>
    e.tag === 'Left' ? ifLeft(e.left) : ifRight(e.right);

export const todo = <A> (): A => {
    throw new Error('todo');
}