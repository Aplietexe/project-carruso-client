import { Alert } from "react-bootstrap"

type RequestFormAlertProps = Readonly<{
  error?: string
  isFormValid: boolean
  isSuccessful: boolean
  shouldShowAlert: boolean
}>

const RequestFormAlert = ({
  error,
  isFormValid,
  isSuccessful,
  shouldShowAlert,
}: RequestFormAlertProps) => {
  if (!isFormValid)
    return (
      <Alert show={shouldShowAlert} variant="info">
        <Alert.Heading className="text-center">
          Debes completar todos los campos
        </Alert.Heading>
      </Alert>
    )

  if (error !== undefined)
    return (
      <Alert variant="danger">
        <Alert.Heading className="text-center">
          Se ha producido un error al enviar la solicitud
        </Alert.Heading>
        <p>{error}</p>
      </Alert>
    )

  if (isSuccessful)
    return (
      <Alert variant="success">
        <Alert.Heading className="text-center">
          Se ha enviado la solicitud
        </Alert.Heading>
      </Alert>
    )

  // eslint-disable-next-line unicorn/no-null
  return null
}

export default RequestFormAlert
