import type { ChangeEventHandler } from "react"
import { useCallback, useState } from "react"
import { FormGroup, FormLabel, FormControl } from "react-bootstrap"

type RequestFormInputProps = Readonly<{
  id: string
  isInvalid?: boolean
  name: string
  onChange: () => void
  shouldShowAlert: boolean
}>

const RequestFormInput = ({
  id,
  isInvalid,
  name,
  onChange,
  shouldShowAlert,
}: RequestFormInputProps) => {
  const [isInvalidLocal, setIsInvalidLocal] = useState(true)

  const isInvalidFinal = isInvalid === undefined ? isInvalidLocal : isInvalid

  const handleChange: ChangeEventHandler<HTMLInputElement> = useCallback(
    (event) => {
      onChange()

      const isInvalidLocalNew = !event.currentTarget.value.trim()

      setIsInvalidLocal(isInvalidLocalNew)
    },
    [onChange],
  )

  return (
    <FormGroup controlId={id}>
      <FormLabel>{name}:</FormLabel>
      <FormControl
        isInvalid={shouldShowAlert && isInvalidFinal}
        name={id}
        onChange={handleChange}
        placeholder={name}
        type="text"
      />
    </FormGroup>
  )
}

export default RequestFormInput
