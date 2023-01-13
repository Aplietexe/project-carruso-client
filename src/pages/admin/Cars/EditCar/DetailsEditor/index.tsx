import { faPlus } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { type Dispatch, useCallback } from "react"
import { Accordion } from "react-bootstrap"

import type { DetailsReducerAction } from "../../../../../utils/reducers/detailsReducer"
import type { DetailType } from "../../../../../utils/types"

import Detail from "./Detail"

type DetailsEditorProps = Readonly<{
  details: readonly DetailType[]
  dispatchDetails: Dispatch<DetailsReducerAction>
}>

const DetailsEditor = ({ details, dispatchDetails }: DetailsEditorProps) => {
  const handleNew = useCallback(() => {
    dispatchDetails({ newDetail: { body: "", title: "" } })
  }, [dispatchDetails])

  return (
    <>
      <Accordion>
        {details.map((detail, index) => (
          <Detail
            index={index}
            // eslint-disable-next-line react/no-array-index-key
            key={index}
            {...detail}
            dispatchDetails={dispatchDetails}
          />
        ))}
      </Accordion>
      <p className="text-center py-3">
        <FontAwesomeIcon icon={faPlus} onClick={handleNew} size="2x" />
      </p>
    </>
  )
}

export default DetailsEditor
