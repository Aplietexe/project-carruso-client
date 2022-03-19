import { useParams } from "react-router-dom"

import Car from "../pages/Car"

const CarRoute = () => {
  const { id } = useParams()

  return id ? <Car id={id} /> : <div>Please provide an ID</div>
}

export default CarRoute
