import { useBreakpoints, useFetch } from "../../utils/hooks"

import CarLarge from "./sizes/CarLarge"
import CarSmall from "./sizes/CarSmall"
import type { DetailledCar } from "./types"

type CarProps = Readonly<{
  id: string
}>

const Car = ({ id }: CarProps) => {
  const { error, isLoading, value } = useFetch<DetailledCar>(`/car/${id}`, {}, [
    id,
  ])

  const breakpoints = useBreakpoints()

  if (error !== undefined) return <p>{error}</p>
  if (isLoading) return <div>Loading</div>

  return breakpoints.lg ? <CarLarge {...value} /> : <CarSmall {...value} />
}

export default Car
