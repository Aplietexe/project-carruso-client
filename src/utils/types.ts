import type { Dispatch, SetStateAction } from "react"

type ValidCategory = "new" | "seminew" | "utility"

type BasicDetailsCar = Readonly<{
  _id: string
  category: ValidCategory
  date: number
  image: string
  price: number
  title: string
}>

type DeepReadonly<T> = T extends (infer R)[]
  ? readonly DeepReadonly<R>[]
  : T extends Function
  ? T
  : T extends object
  ? { readonly [P in keyof T]: DeepReadonly<T[P]> }
  : T

type DetailType = Readonly<{
  body: string
  title: string
}>

type DetailledCar = DeepReadonly<{
  category: ValidCategory
  details: DetailType[]
  images: string[]
  price: number
  title: string
}>

type JsonValue =
  | boolean
  | number
  | string
  | readonly JsonValue[]
  | { readonly [x: string]: JsonValue }

type SetState<T> = Dispatch<SetStateAction<T>>

type AtLeastOne<T, U = { [K in keyof T]: Pick<T, K> }> = Partial<T> & U[keyof U]

export type {
  AtLeastOne,
  DetailType,
  BasicDetailsCar,
  DetailledCar,
  DeepReadonly,
  JsonValue,
  SetState,
  ValidCategory,
}
