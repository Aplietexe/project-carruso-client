import type { ChangeEventHandler } from "react"
import { useCallback } from "react"
import { Accordion, FormControl } from "react-bootstrap"

import type { DetailsReducerAction } from "../../../../../utils/reducers/detailsReducer"
import type { DetailType } from "../../../../../utils/types"

type DetailsProps = Readonly<
  DetailType & {
    dispatchDetails: React.Dispatch<DetailsReducerAction>
    index: number
  }
>

const Detail = ({ body, dispatchDetails, index, title }: DetailsProps) => {
  const handleTitleChange: ChangeEventHandler<HTMLInputElement> = useCallback(
    (event) => {
      const newTitle = event.currentTarget.value

      if (newTitle) dispatchDetails({ index, title: newTitle })
    },
    [dispatchDetails, index],
  )

  const handleBodyChange: ChangeEventHandler<HTMLTextAreaElement> = useCallback(
    (event) => {
      const newBody = event.currentTarget.value

      if (newBody) dispatchDetails({ body: newBody, index })
    },
    [dispatchDetails, index],
  )

  return (
    <Accordion.Item eventKey={String(index)}>
      <Accordion.Header>
        <FormControl onChange={handleTitleChange} value={title} />
      </Accordion.Header>
      <Accordion.Body>
        <FormControl as="textarea" onChange={handleBodyChange} value={body} />
      </Accordion.Body>
    </Accordion.Item>
  )
}

export default Detail
