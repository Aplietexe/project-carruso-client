import { useEffect, useReducer, useState } from "react"
import { Container } from "react-bootstrap"

import PageTitle from "../../../../components/PageTitle"
import withId from "../../../../utils/HOCs/withId"
import { useFetch } from "../../../../utils/hooks"
import detailsReducer from "../../../../utils/reducers/detailsReducer"
import imagesSelectorReducer from "../../../../utils/reducers/imagesSelectorReducer"
import type { DetailledCar, ValidCategory } from "../../../../utils/types"

import BasicFieldsEditor from "./BasicFieldsEditor"
import DetailsEditor from "./DetailsEditor"
import ImagesSelector from "./ImagesSelector"

type EditCarProps = Readonly<{
  id: string
}>

const EditCar = ({ id }: EditCarProps) => {
  const [details, dispatchDetails] = useReducer(detailsReducer, [])
  const [images, dispatchImages] = useReducer(imagesSelectorReducer, [])

  const { error, isLoading, value } = useFetch<DetailledCar>(`/car/${id}`, {}, [
    id,
  ])

  const [title, setTitle] = useState<string>()
  const [price, setPrice] = useState<number>()
  const [category, setCategory] = useState<ValidCategory>()

  useEffect(() => {
    if (!value) return

    setTitle(value.title)
    setPrice(value.price)
    setCategory(value.category)

    dispatchDetails({ details: value.details })

    dispatchImages({ images: value.images })
  }, [value])

  if (error !== undefined) return <p>{error}</p>
  if (
    isLoading ||
    title === undefined ||
    price === undefined ||
    category === undefined
  )
    return <div />

  return (
    <>
      <PageTitle title="Editar Auto" />
      <Container className="mb-5">
        <BasicFieldsEditor
          category={category}
          price={price}
          setCategory={setCategory}
          setPrice={setPrice}
          setTitle={setTitle}
          title={title}
        />
        <DetailsEditor details={details} dispatchDetails={dispatchDetails} />
        <ImagesSelector dispatchImages={dispatchImages} images={images} />
      </Container>
    </>
  )
}

export default withId(EditCar)
