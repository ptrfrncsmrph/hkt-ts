# HKT-TS

`HKT-TS` is an encoding for Higher-Kinded-Types (HKT) in TypeScript. 
It requires writing 0 overloads for your functions, and does not need to modify an existing package.
This means the use of HKTs for your libraries can be opt-in, delivered by an external package, and 
potentially from the community!

## Installation (NOT YET !!)

```sh
# NPM
npm i --save hkt-ts

# Yarn
yarn install hkt-ts
```

## How to register a new HKT

```typescript
import { TypeParams } from 'hkt-ts'

export const URI = Symbol.for('Either') // Could be string | number | symbol
export type Left<A> = { left: true, value: A }
export type Right<A> = { left: false, value: A}
export type Either<A, B> = Left<A> | Right<B>

// The URI must match in both type-level maps to work correctly.
declare module "hkt-ts" {
  // Setup how to pass new type-parameters to a Type, looked up by the given URI.
  export interface Hkts<Params> {
    // TypeParams.First, TypeParams.Second,..., TypeParams.Fifth, are helpers for extracting
    // type parameters from Values working from right-to-left.
    [URI]: Either<TypeParams.Second<Params>, TypeParams.First<Params>>
  }
  
  // Setup how to extract a Tuple of type-parameters from a registered Type, looked up by the given URI.
  export interface HktTypeParams<T> {
    // Wrapping in a tuple helps to avoid returning an invalid union e.g. [A, unknown] | [unknown, B]
    [URI]: [T] extends [Either<infer A, infer B>] ? [A, B] : never
  }
}

```

## How to create a new type-class

```typescript
import { PossibleValues, Type, Types, TypeParams } from 'hkt-ts'

// All type-classes should use an a `extends Types` clause to ensure it's working with
// registered types.
import { Type, Types } from '../Hkts'
import { TypeParams } from '../TypeParams'

export interface Functor<T extends Types> {
  readonly map: {
    // Depending on the length of type-parameters, create the signature you'd expect or want
    1: <A, B>(f: (a: A) => B, functor: Type<T, [A]>) => Type<T, [B]>
    2: <A, B, C>(f: (a: A) => B, functor: Type<T, [C, A]>) => Type<T, [C, B]>
    3: <A, B, C, D>(f: (a: A) => B, functor: Type<T, [C, D, A]>) => Type<T, [C, D, B]>
    4: <A, B, C, D, E>(f: (a: A) => B, functor: Type<T, [C, D, E, A]>) => Type<T, [C, D, E, B]>
    5: <A, B, C, D, E, F>(
      f: (a: A) => B,
      functor: Type<T, [C, D, E, F, A]>,
    ) => Type<T, [C, D, E, F, B]>
  // Gets the number of type-params associated with a particular type T, and matches it to the appropriate signature
  }[TypeParams.Length<T>] 
}
```

For examples take a look within [source/type-classes](./source/type-classes)!
