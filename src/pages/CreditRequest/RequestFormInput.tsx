import { FormGroup, FormLabel, FormControl } from "react-bootstrap"

type RequestFormInputProps = Readonly<{
  id: string
  name: string
}>

const RequestFormInput = ({ id, name }: RequestFormInputProps) => (
  <FormGroup controlId={id}>
    <FormLabel>{name}:</FormLabel>
    <FormControl placeholder={name} type="text" />
  </FormGroup>
)

export default RequestFormInput
