import type { Dispatch, SetStateAction } from "react"

type DeepReadonly<T> = T extends (infer R)[]
  ? readonly DeepReadonly<R>[]
  : T extends Function
  ? T
  : T extends object
  ? { readonly [P in keyof T]: DeepReadonly<T[P]> }
  : T

type JsonValue =
  | boolean
  | number
  | string
  | readonly JsonValue[]
  | { readonly [x: string]: JsonValue }

type SetState<T> = Dispatch<SetStateAction<T>>

export type { DeepReadonly, JsonValue, SetState }
