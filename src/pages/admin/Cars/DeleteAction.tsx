import { faCheck, faTrash } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useCallback } from "react"
import styled from "styled-components"

import { useSendData } from "../../../utils/hooks"

type DeleteActionProps = Readonly<{
  id: string
}>

const StyledIcon = styled(FontAwesomeIcon)`
  cursor: pointer;
`

const DeleteAction = ({ id }: DeleteActionProps) => {
  const { isLoading, isSuccessful, sendData } = useSendData(
    "/car/",
    {
      method: "DELETE",
    },
    [],
  )

  const handleClick = useCallback(() => {
    if (!isLoading) sendData(id)
  }, [isLoading, sendData, id])

  let returnValue: JSX.Element

  if (isSuccessful)
    returnValue = <FontAwesomeIcon className="me-3" icon={faCheck} />
  else if (isLoading)
    returnValue = <FontAwesomeIcon className="me-3 text-muted" icon={faTrash} />
  else
    returnValue = (
      <StyledIcon className="me-3" icon={faTrash} onClick={handleClick} />
    )

  return returnValue
}

export default DeleteAction
