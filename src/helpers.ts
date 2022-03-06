import type { Dispatch, SetStateAction } from "react"

type DeepReadonly<T> = T extends (infer R)[]
  ? readonly DeepReadonly<R>[]
  : T extends Function
  ? T
  : T extends object
  ? { readonly [P in keyof T]: DeepReadonly<T[P]> }
  : T

type SetState<T> = Dispatch<SetStateAction<T>>

const formatNumber = (number: number) =>
  new Intl.NumberFormat("es-MX").format(Math.round(number))

export { type DeepReadonly, type SetState, formatNumber }
