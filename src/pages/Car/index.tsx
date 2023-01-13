import withId from "../../utils/HOCs/withId"
import { useBreakpoints, useFetch } from "../../utils/hooks"
import type { DetailledCar } from "../../utils/types"

import CarLarge from "./sizes/CarLarge"
import CarSmall from "./sizes/CarSmall"

type CarProps = Readonly<{
  id: string
}>

const Car = ({ id }: CarProps) => {
  const { error, isLoading, value } = useFetch<DetailledCar>(`/car/${id}`, {}, [
    id,
  ])

  const breakpoints = useBreakpoints()

  if (error !== undefined) return <p>{error}</p>
  if (isLoading) return <div />

  return breakpoints.lg ? <CarLarge {...value} /> : <CarSmall {...value} />
}

export default withId(Car)
