import type { DeepReadonly } from "../../utils/types"

type DetailledCar = DeepReadonly<{
  details: { body: string; title: string }[]
  images: string[]
  price: number
  title: string
}>

export type { DetailledCar }
