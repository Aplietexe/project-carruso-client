/* eslint-disable @typescript-eslint/no-unnecessary-condition */
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
  date: number
  id: string
  image: string
  price: number
  title: string
}>

const mockCars = [
  {
    date: Math.floor(Math.random() * 1_000_000),
    id: "1",

    image:
      "https://d2j6dbq0eux0bg.cloudfront.net/images/70740525/2941388700.jpg",

    price: Math.floor(Math.random() * 1_000_000),
    title: "title of car of the first type",
  },
  {
    date: Math.floor(Math.random() * 1_000_000),
    id: "2",

    image:
      "https://d2j6dbq0eux0bg.cloudfront.net/images/70740525/2941376339.jpg",

    price: Math.floor(Math.random() * 1_000_000),
    title: "title of a different car",
  },
  {
    date: Math.floor(Math.random() * 1_000_000),
    id: "3",

    image:
      "https://d2j6dbq0eux0bg.cloudfront.net/images/70740525/2941388700.jpg",

    price: Math.floor(Math.random() * 1_000_000),
    title: "title of car of the first type",
  },
  {
    date: Math.floor(Math.random() * 1_000_000),
    id: "4",

    image:
      "https://d2j6dbq0eux0bg.cloudfront.net/images/70740525/2941376339.jpg",

    price: Math.floor(Math.random() * 1_000_000),
    title: "title of a different car",
  },
  {
    date: Math.floor(Math.random() * 1_000_000),
    id: "5",

    image:
      "https://d2j6dbq0eux0bg.cloudfront.net/images/70740525/2941388700.jpg",

    price: Math.floor(Math.random() * 1_000_000),
    title: "title of car of the first type",
  },
  {
    date: Math.floor(Math.random() * 1_000_000),
    id: "6",

    image:
      "https://d2j6dbq0eux0bg.cloudfront.net/images/70740525/2941376339.jpg",

    price: Math.floor(Math.random() * 1_000_000),
    title: "title of a different car",
  },
  {
    date: Math.floor(Math.random() * 1_000_000),
    id: "7",

    image:
      "https://d2j6dbq0eux0bg.cloudfront.net/images/70740525/2941388700.jpg",

    price: Math.floor(Math.random() * 1_000_000),
    title: "title of car of the first type",
  },
  {
    date: Math.floor(Math.random() * 1_000_000),
    id: "8",

    image:
      "https://d2j6dbq0eux0bg.cloudfront.net/images/70740525/2941376339.jpg",

    price: Math.floor(Math.random() * 1_000_000),
    title: "title of a different car",
  },
]

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
`

const Category = ({ displayName, category }: CategoryProps) => {
  const [search, setSearch] = useState("")
  const [sort, setSort] = useState<Sort>("newest")

  let { isLoading, error, value } = useFetch<BasicDetailsCar[]>(
    "/cars",
    {
      parameters: { category },
    },
    [category],
  )
  // dev
  isLoading = false
  error = undefined
  value = mockCars
  // dev

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
        {processedCars?.map((car) => (
          <CategoryCarCard
            image={car.image}
            key={car.id}
            price={car.price}
            title={car.title}
          />
        ))}
      </Gallery>
    </Container>
  )
}

export default Category
