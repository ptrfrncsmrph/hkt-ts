import { Type, Types } from '../Hkts'
import { TypeParams } from '../TypeParams'
import { Applicative } from './Applicative'

export interface Traversable<T extends Types> {
  readonly traverse: {
    1: <U extends Types>(applicative: Applicative<U>) => Traverse1<T, U>
    2: <U extends Types>(applicative: Applicative<U>) => Traverse2<T, U>
    3: <U extends Types>(applicative: Applicative<U>) => Traverse3<T, U>
    4: <U extends Types>(applicative: Applicative<U>) => Traverse4<T, U>
    5: <U extends Types>(applicative: Applicative<U>) => Traverse5<T, U>
  }[TypeParams.Length<T>]
}

type Traverse1<T extends Types, U extends Types> = {
  1: <A, B>(f: (a: A) => Type<U, [B]>, t: Type<T, [A]>) => Type<U, [Type<U, [B]>]>
  2: <A, B, C>(f: (a: A) => Type<U, [B, C]>, t: Type<T, [A]>) => Type<U, [Type<U, [B, C]>]>
  3: <A, B, C, D>(f: (a: A) => Type<U, [B, C, D]>, t: Type<T, [A]>) => Type<U, [Type<U, [B, C, D]>]>
  4: <A, B, C, D, E>(
    f: (a: A) => Type<U, [B, C, D, E]>,
    t: Type<T, [A]>,
  ) => Type<U, [Type<U, [B, C, D, E]>]>
  5: <A, B, C, D, E, F>(
    f: (a: A) => Type<U, [B, C, D, E, F]>,
    t: Type<T, [A]>,
  ) => Type<U, [Type<U, [B, C, D, E, F]>]>
}[TypeParams.Length<U>]

type Traverse2<T extends Types, U extends Types> = {
  1: <A, B, C>(f: (a: A) => Type<U, [B]>, t: Type<T, [C, A]>) => Type<U, [Type<T, [C, B]>]>
  2: <A, B, C, D>(f: (a: A) => Type<U, [B, C]>, t: Type<T, [D, A]>) => Type<U, [B, Type<T, [D, C]>]>
  3: <A, B, C, D, E>(
    f: (a: A) => Type<U, [B, C, D]>,
    t: Type<T, [E, A]>,
  ) => Type<U, [B, C, Type<T, [E, D]>]>
  4: <A, B, C, D, E, F>(
    f: (a: A) => Type<U, [B, C, D, E]>,
    t: Type<T, [F, A]>,
  ) => Type<U, [B, C, E, Type<T, [F, E]>]>
  5: <A, B, C, D, E, F, G>(
    f: (a: A) => Type<U, [B, C, D, E, F]>,
    t: Type<T, [G, A]>,
  ) => Type<U, [B, C, E, F, Type<T, [G, F]>]>
}[TypeParams.Length<U>]

type Traverse3<T extends Types, U extends Types> = {
  1: <A, B, C, D>(f: (a: A) => Type<U, [B]>, t: Type<T, [C, D, A]>) => Type<U, [Type<T, [C, D, B]>]>
  2: <A, B, C, D, E>(
    f: (a: A) => Type<U, [B, C]>,
    t: Type<T, [D, E, A]>,
  ) => Type<U, [B, Type<T, [D, E, C]>]>
  3: <A, B, C, D, E, F>(
    f: (a: A) => Type<U, [B, C, D]>,
    t: Type<T, [E, F, A]>,
  ) => Type<U, [B, C, Type<T, [E, F, D]>]>
  4: <A, B, C, D, E, F, G>(
    f: (a: A) => Type<U, [B, C, D, E]>,
    t: Type<T, [F, G, A]>,
  ) => Type<U, [B, C, D, Type<T, [F, G, E]>]>
  5: <A, B, C, D, E, F, G, H>(
    f: (a: A) => Type<U, [B, C, D, E, F]>,
    t: Type<T, [G, H, A]>,
  ) => Type<U, [B, C, D, E, Type<T, [G, H, F]>]>
}[TypeParams.Length<U>]

type Traverse4<T extends Types, U extends Types> = {
  1: <A, B, C, D, E>(
    f: (a: A) => Type<U, [B]>,
    t: Type<T, [C, D, E, A]>,
  ) => Type<U, [Type<T, [C, D, E, B]>]>
  2: <A, B, C, D, E, F>(
    f: (a: A) => Type<U, [B, C]>,
    t: Type<T, [D, E, F, A]>,
  ) => Type<U, [B, Type<T, [D, E, F, C]>]>
  3: <A, B, C, D, E, F, G>(
    f: (a: A) => Type<U, [B, C, D]>,
    t: Type<T, [E, F, G, A]>,
  ) => Type<U, [B, C, Type<T, [E, F, G, D]>]>
  4: <A, B, C, D, E, F, G, H>(
    f: (a: A) => Type<U, [B, C, D, E]>,
    t: Type<T, [F, G, H, A]>,
  ) => Type<U, [B, C, D, Type<T, [F, G, H, E]>]>
  5: <A, B, C, D, E, F, G, H, I>(
    f: (a: A) => Type<U, [B, C, D, E, F]>,
    t: Type<T, [G, H, I, A]>,
  ) => Type<U, [B, C, D, E, Type<T, [G, H, I, F]>]>
}[TypeParams.Length<U>]

type Traverse5<T extends Types, U extends Types> = {
  1: <A, B, C, D, E, F>(
    f: (a: A) => Type<U, [B]>,
    t: Type<T, [C, D, E, F, A]>,
  ) => Type<U, [Type<T, [C, D, E, F, B]>]>
  2: <A, B, C, D, E, F, G>(
    f: (a: A) => Type<U, [B, C]>,
    t: Type<T, [D, E, F, G, A]>,
  ) => Type<U, [B, Type<T, [D, E, F, G, C]>]>
  3: <A, B, C, D, E, F, G, H>(
    f: (a: A) => Type<U, [B, C, D]>,
    t: Type<T, [E, F, G, H, A]>,
  ) => Type<U, [B, C, Type<T, [E, F, G, H, D]>]>
  4: <A, B, C, D, E, F, G, H, I>(
    f: (a: A) => Type<U, [B, C, D, E]>,
    t: Type<T, [F, G, H, I, A]>,
  ) => Type<U, [B, C, D, Type<T, [F, G, H, I, E]>]>
  5: <A, B, C, D, E, F, G, H, I, J>(
    f: (a: A) => Type<U, [B, C, D, E, F]>,
    t: Type<T, [G, H, I, J, A]>,
  ) => Type<U, [B, C, D, E, Type<T, [G, H, I, J, F]>]>
}[TypeParams.Length<U>]
