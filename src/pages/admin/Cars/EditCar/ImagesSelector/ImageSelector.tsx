import { faX } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { type Dispatch, useCallback } from "react"
import { Image as ImageComponent } from "react-bootstrap"
import styled from "styled-components"

import type { ImagesSelectorReducerAction } from "../../../../../utils/reducers/imagesSelectorReducer"

type ImageSelectorProps = Readonly<{
  dispatchImages: Dispatch<ImagesSelectorReducerAction>
  image: string
  index: number
}>

const StyledImage = styled(ImageComponent)`
  aspect-ratio: 4/3;
  width: 300px;
  object-fit: cover;
`

const StyledIcon = styled(FontAwesomeIcon)`
  cursor: pointer;
`

const ImageSelector = ({
  dispatchImages,
  image,
  index,
}: ImageSelectorProps) => {
  const handleDelete = useCallback(() => {
    dispatchImages({ action: "delete", index })
  }, [dispatchImages, index])

  return (
    <div>
      <div>
        <StyledImage src={image} />
      </div>
      <div className="text-center p-2">
        <StyledIcon icon={faX} onClick={handleDelete} size="2x" />
      </div>
    </div>
  )
}

export default ImageSelector
