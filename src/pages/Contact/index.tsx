import { Container } from "react-bootstrap"

import PageTitle from "../../components/PageTitle"

import ContactForm from "./ContactForm"
import ContactInfo from "./ContactInfo"

const Contact = () => (
  <Container className="my-5">
    <PageTitle title="Contáctanos" />
    <ContactForm />
    <ContactInfo />
  </Container>
)

export default Contact
