import { Form } from "react-bootstrap"
import styled from "styled-components"

import GridMaxColumns from "../../components/GridMaxColumns"
import SubmitButton from "../../components/SubmitButton"

import RequestFormInput from "./RequestFormInput"
import RequestFormRadio from "./RequestFormRadio"

const FormGrid = styled(GridMaxColumns)`
  row-gap: 2rem;
`

const RequestForm = () => (
  <Form>
    <FormGrid gap="3rem" itemMinWidth="250px" maxColumns={3}>
      <RequestFormInput id="name" name="Nombre" />
      <RequestFormInput id="paternalSurname" name="Apellido Paterno" />
      <RequestFormInput id="maternalSurname" name="Apellido Materno" />
      <RequestFormInput id="rfc" name="RFC" />
      <RequestFormInput id="phone" name="Teléfono Celular" />
      <RequestFormInput id="email" name="Correo" />
      <RequestFormInput id="monthlyIncome" name="Ingresos Mensuales" />
      <RequestFormInput id="referenceName" name="Referencia Nombre Completo" />
      <RequestFormInput id="referencePhone" name="Referencia Teléfono" />
      <RequestFormInput
        id="reference2Name"
        name="Referencia 2 Nombre Completo"
      />
      <RequestFormInput id="reference2Phone" name="Referencia 2 Teléfono" />
      <RequestFormInput id="address" name="Calle, colonia y C.P." />
      <RequestFormRadio
        fieldName="¿Con qué comprueba ingreso?"
        id="proofOfIncome"
        options={["Estados de cuenta", "Recibos de nomina"]}
      />
      <RequestFormRadio
        fieldName="¿Cómo considera su situación en buró de crédito?"
        id="creditBureauStatus"
        options={[
          "No tengo Historial de Crédito",
          "Tengo Buen historial",
          "Tengo Historial regular",
        ]}
      />
      <RequestFormRadio
        fieldName="¿Cómo te enviamos respuesta?"
        id="answerMethod"
        options={["Correo / Email", "WhatsApp"]}
      />
    </FormGrid>
    <SubmitButton>
      Al enviar mis datos acepto términos y condiciones
    </SubmitButton>
  </Form>
)

export default RequestForm
