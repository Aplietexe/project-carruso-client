import { Button, FormControl, Form, FloatingLabel } from "react-bootstrap"
import styled from "styled-components"

const StyledButton = styled(Button)`
  display: block;
  margin-inline: auto;
  width: 40%;
  min-width: 100px;
`

const Textarea = styled(FormControl)`
  height: 200px !important;
`

const ContactForm = () => (
  <Form className="mb-5">
    <FloatingLabel className="mb-4" controlId="name" label="Nombre">
      <FormControl placeholder="Ingresa tu nombre" type="text" />
    </FloatingLabel>
    <FloatingLabel className="mb-4" controlId="email" label="Correo">
      <FormControl placeholder="Ingresa tu correo electrónico" />
    </FloatingLabel>
    <FloatingLabel className="mb-4" controlId="phone" label="Teléfono">
      <FormControl placeholder="Ingresa tu teléfono" />
    </FloatingLabel>
    <FloatingLabel className="mb-4" controlId="message" label="Mensaje">
      <Textarea
        as="textarea"
        className="form-control"
        placeholder="Escribe aquí tu mensaje"
      />
    </FloatingLabel>
    <StyledButton type="submit" variant="primary">
      Enviar mensaje
    </StyledButton>
  </Form>
)

export default ContactForm
