The Curry-Howard Isomorphism presents:

The Incredible Proof Machine... translated to TypeScript
========================================================

Say what?
---------

The Incredible Proof Machine (http://incredible.nomeata.de/)
is a fantastic way to learn about logical proofs,
and a lot of fun. It's a great training exercise for programmers.

The Curry-Howard isomorphism states that proofs in a logic system correspond
to programs in a programming language. So, if you translate a theorem into types,
if you can inhabit this type, then you've proven the theorem.

This repository translates most of the theorems in the Incredible Proof Machine
into TypeScript functions. Your task is to implement the methods in order to prove the theorem.

See also <https://github.com/techtangents/java-incredible-proof-machine>

Hints
-----

`npm run compile` to check your answers. Remember, compilation is proof-checking.

Feel free to destructure the `Pair` parameters. e.g. change:

```
export const e06 = <A, B> (p: Pair<A, B>): A => todo();
```

to: 

```
export const e06 = <A, B> ([a, b]: Pair<A, B>): A => todo();
```

Status
------

Session 1 and 2 are complete. 

Session 3 is TODO - feel free to contribute. 

As for session 4, I'm not sure how to represent `⊥` in TypeScript.

