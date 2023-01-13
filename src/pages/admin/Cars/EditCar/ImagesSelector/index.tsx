import type { Dispatch } from "react"
import { FormControl } from "react-bootstrap"
import styled from "styled-components"

import type { ImagesSelectorReducerAction } from "../../../../../utils/reducers/imagesSelectorReducer"

import ImageSelector from "./ImageSelector"

type ImagesSelectorProps = Readonly<{
  dispatchImages: Dispatch<ImagesSelectorReducerAction>
  images: readonly string[]
}>

const StyledContainer = styled.div`
  display: flex;
  gap: 2rem;
`

const ImagesSelector = ({ dispatchImages, images }: ImagesSelectorProps) => (
  <>
    <h2 className="fs-3">Eliminar imágenes</h2>
    <StyledContainer>
      {images.map((image, index) => (
        <ImageSelector
          dispatchImages={dispatchImages}
          image={image}
          index={index}
          key={image}
        />
      ))}
    </StyledContainer>
    <h2 className="fs-3 mt-4">Añadir imágenes</h2>
    <FormControl accept="image/png, image/jpeg" multiple type="file" />
  </>
)

export default ImagesSelector
