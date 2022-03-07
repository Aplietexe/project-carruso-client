import { FormGroup, FormLabel, FormCheck } from "react-bootstrap"

import type { DeepReadonly } from "../../utils/types"

type RequestFormRadioProps = DeepReadonly<{
  fieldName: string
  id: string
  options: string[]
}>

const RequestFormRadio = ({
  fieldName,
  id,
  options,
}: RequestFormRadioProps) => (
  <FormGroup>
    <FormLabel>{fieldName}:</FormLabel>
    {options.map((option, index) => (
      <FormCheck
        id={`${id}${index}`}
        key={option}
        label={option}
        name={id}
        type="radio"
        value={option}
      />
    ))}
  </FormGroup>
)

export default RequestFormRadio
