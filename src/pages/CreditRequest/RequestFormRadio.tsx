import { FormGroup, FormLabel, FormCheck } from "react-bootstrap"

import type { DeepReadonly } from "../../utils/types"

type RequestFormRadioProps = DeepReadonly<{
  fieldName: string
  id: string
  onChange: () => void
  options: string[]
}>

const RequestFormRadio = ({
  fieldName,
  id,
  options,
  onChange,
}: RequestFormRadioProps) => (
  <FormGroup>
    <FormLabel>{fieldName}:</FormLabel>
    {options.map((option, index) => (
      <FormCheck
        id={`${id}${index}`}
        key={option}
        label={option}
        name={id}
        onChange={onChange}
        type="radio"
        value={option}
      />
    ))}
  </FormGroup>
)

export default RequestFormRadio
