import { useMemo, useState } from "react"
import { Container } from "react-bootstrap"
import styled from "styled-components"

import { useFetch } from "../../utils/hooks"
import PageTitle from "../../components/PageTitle"

import CategoryCarCard from "./CategoryCarCard"
import CategoryOptions from "./CategoryOptions"
import type { Sort } from "./types"

type CategoryProps = Readonly<{
  category: string
  displayName: string
}>

type BasicDetailsCar = Readonly<{
  _id: string
  date: number
  image: string
  price: number
  title: string
}>

const carMatchesSearch = (car: BasicDetailsCar, search: string): boolean => {
  const title = car.title.toLowerCase().replace(/\s+/gu, "")

  const searchTerms = search
    .toLowerCase()
    .split(" ")
    .map((term) => term.replace(/\s+/gu, ""))

  return searchTerms.some((term) => title.includes(term))
}

const sorts: {
  [k: string]: (car1: BasicDetailsCar, car2: BasicDetailsCar) => number
} = {
  newest: (car1, car2) => car2.date - car1.date,
  price: (car1, car2) => car1.price - car2.price,
  priceInverted: (car1, car2) => car2.price - car1.price,
  title: (car1, car2) => car1.title.localeCompare(car2.title),
  titleInverted: (car1, car2) => car2.title.localeCompare(car1.title),
}

const Gallery = styled.div`
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));

  .card-img-top {
    object-fit: cover;
    aspect-ratio: 4 / 3;
  }
`

const Category = ({ displayName, category }: CategoryProps) => {
  const [search, setSearch] = useState("")
  const [sort, setSort] = useState<Sort>("newest")

  const { isLoading, error, value } = useFetch<BasicDetailsCar[]>(
    "/cars",
    {
      parameters: { category },
    },
    [category],
  )

  const processedCars = useMemo(() => {
    if (!value) return undefined

    return value
      .filter((car) => carMatchesSearch(car, search))
      .sort((car1, car2) => sorts[sort](car1, car2))
  }, [value, search, sort])

  if (error !== undefined) return <p>{error}</p>
  if (isLoading) return <div>Loading</div>

  return (
    <Container className="my-5">
      <PageTitle title={displayName} />
      <CategoryOptions
        search={search}
        setSearch={setSearch}
        setSort={setSort}
      />
      <Gallery className="mt-3">
        {processedCars?.map(({ _id, image, price, title }) => (
          <CategoryCarCard
            id={_id}
            image={image}
            key={_id}
            price={price}
            title={title}
          />
        ))}
      </Gallery>
    </Container>
  )
}

export default Category
