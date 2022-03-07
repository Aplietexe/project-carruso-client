import { Container } from "react-bootstrap"

import PageTitle from "../../components/PageTitle"

import RequestForm from "./RequestForm"

const CreditRequest = () => (
  <Container className="my-5">
    <PageTitle title="Solicitud" />
    <p className="fs-4 mb-4">
      Al ser preautorizado un asesor Carruso se pondrá en contacto con usted.
    </p>
    <RequestForm />
  </Container>
)

export default CreditRequest
