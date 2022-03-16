import { useCallback, useRef, useState } from "react"
import { Form } from "react-bootstrap"
import styled from "styled-components"

import GridMaxColumns from "../../components/GridMaxColumns"
import SubmitButton from "../../components/SubmitButton"
import { useSendData } from "../../utils/hooks"

import RequestFormAlert from "./RequestFormAlert"
import RequestFormInput from "./RequestFormInput"
import RequestFormRadio from "./RequestFormRadio"
import useValidation from "./validation"

const FormGrid = styled(GridMaxColumns)`
  row-gap: 2rem;
`

const RequestForm = () => {
  const formRef = useRef<HTMLFormElement>(null)

  const { isLoading, error, isSuccessful, sendData } = useSendData(
    "/creditRequest",
    {
      method: "POST",
    },
    [],
  )

  const {
    isFormValid,
    isPhoneValid,
    isEmailValid,
    isReferencePhoneValid,
    isReference2PhoneValid,
    isIncomeValid,
    validateForm,
  } = useValidation(formRef)

  const [shouldShowAlert, setShouldShowAlert] = useState(false)

  const handleSubmit = useCallback(() => {
    if (!formRef.current) return

    if (isFormValid) sendData(new FormData(formRef.current))
    else setShouldShowAlert(true)
  }, [isFormValid, sendData])

  return (
    <Form ref={formRef}>
      <FormGrid className="mb-4" gap="3rem" itemMinWidth="250px" maxColumns={3}>
        <RequestFormInput
          id="name"
          name="Nombre"
          onChange={validateForm}
          shouldShowAlert={shouldShowAlert}
        />
        <RequestFormInput
          id="paternalSurname"
          name="Apellido Paterno"
          onChange={validateForm}
          shouldShowAlert={shouldShowAlert}
        />
        <RequestFormInput
          id="maternalSurname"
          name="Apellido Materno"
          onChange={validateForm}
          shouldShowAlert={shouldShowAlert}
        />
        <RequestFormInput
          id="rfc"
          name="RFC"
          onChange={validateForm}
          shouldShowAlert={shouldShowAlert}
        />
        <RequestFormInput
          id="phone"
          isInvalid={!isPhoneValid}
          name="Teléfono Celular"
          onChange={validateForm}
          shouldShowAlert={shouldShowAlert}
        />
        <RequestFormInput
          id="email"
          isInvalid={!isEmailValid}
          name="Correo"
          onChange={validateForm}
          shouldShowAlert={shouldShowAlert}
        />
        <RequestFormInput
          id="monthlyIncome"
          isInvalid={!isIncomeValid}
          name="Ingresos Mensuales"
          onChange={validateForm}
          shouldShowAlert={shouldShowAlert}
        />
        <RequestFormInput
          id="referenceName"
          name="Referencia Nombre Completo"
          onChange={validateForm}
          shouldShowAlert={shouldShowAlert}
        />
        <RequestFormInput
          id="referencePhone"
          isInvalid={!isReferencePhoneValid}
          name="Referencia Teléfono"
          onChange={validateForm}
          shouldShowAlert={shouldShowAlert}
        />
        <RequestFormInput
          id="reference2Name"
          name="Referencia 2 Nombre Completo"
          onChange={validateForm}
          shouldShowAlert={shouldShowAlert}
        />
        <RequestFormInput
          id="reference2Phone"
          isInvalid={!isReference2PhoneValid}
          name="Referencia 2 Teléfono"
          onChange={validateForm}
          shouldShowAlert={shouldShowAlert}
        />
        <RequestFormInput
          id="address"
          name="Calle, colonia y C.P."
          onChange={validateForm}
          shouldShowAlert={shouldShowAlert}
        />
        <RequestFormRadio
          fieldName="¿Con qué comprueba ingreso?"
          id="proofOfIncome"
          onChange={validateForm}
          options={["Estados de cuenta", "Recibos de nomina"]}
        />
        <RequestFormRadio
          fieldName="¿Cómo considera su situación en buró de crédito?"
          id="creditBureauStatus"
          onChange={validateForm}
          options={[
            "No tengo Historial de Crédito",
            "Tengo Buen historial",
            "Tengo Historial regular",
          ]}
        />
        <RequestFormRadio
          fieldName="¿Cómo te enviamos respuesta?"
          id="answerMethod"
          onChange={validateForm}
          options={["Correo / Email", "WhatsApp"]}
        />
      </FormGrid>
      <RequestFormAlert
        error={error}
        isFormValid={isFormValid}
        isSuccessful={isSuccessful}
        shouldShowAlert={shouldShowAlert}
      />
      <SubmitButton disabled={isLoading} onClick={handleSubmit}>
        Al enviar mis datos acepto términos y condiciones
      </SubmitButton>
    </Form>
  )
}

export default RequestForm
