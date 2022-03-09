/* eslint-disable @typescript-eslint/no-unnecessary-condition */
import { useBreakpoints, useFetch } from "../../utils/hooks"

import CarLarge from "./sizes/CarLarge"
import CarSmall from "./sizes/CarSmall"
import type { DetailledCar } from "./types"

type CarProps = Readonly<{
  id: string
}>

const mockCar = {
  details: [
    { body: "27682", title: "Kms" },
    { body: "GRIS", title: "Color" },
    { body: "Manual", title: "Trasmisión" },
    { body: "Gasolina", title: "Tipo de Combustión" },
    { body: "Aire Acondicionado, Cristales Eléctricos", title: "Accesorios" },
    { body: "Chevrolet Tlalnepantla", title: "Ubicación de la unidad" },
    {
      body: "Factura de Origen y Tenencias actualizadas, se factura",
      title: "Documentación Verificada",
    },
  ],

  images: [
    "https://d2j6dbq0eux0bg.cloudfront.net/images/70740525/2941376339.jpg",
    "https://d2j6dbq0eux0bg.cloudfront.net/images/70740525/2941388700.jpg",
  ],

  price: 123_466,
  title: "Chevrolet Beat 2021",
}

const Car = ({ id }: CarProps) => {
  let { error, isLoading, value } = useFetch<DetailledCar>(
    "/car",
    { parameters: { id } },
    [id],
  )

  const breakpoints = useBreakpoints()

  // dev
  error = undefined
  isLoading = false
  value = mockCar
  // dev

  if (error !== undefined) return <p>{error}</p>
  if (isLoading) return <div>Loading</div>

  return breakpoints.lg ? <CarLarge {...value} /> : <CarSmall {...value} />
}

export default Car
