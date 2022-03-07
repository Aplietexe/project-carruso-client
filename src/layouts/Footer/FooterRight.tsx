import { Row, Col } from "react-bootstrap"
import styled from "styled-components"

import GridMaxColumns from "../../components/GridMaxColumns"

const Links = styled(GridMaxColumns)`
  padding-inline: 1.5rem;
  align-items: center;
`

const FooterRight = () => (
  <>
    <Row className="mb-3">
      <Col>PORTAL PARA VENDEDOR / AGENCIA</Col>
    </Row>
    <Row>
      <Col>
        <Links gap="10px" itemMinWidth="180px" maxColumns={3}>
          <div>Protección Antifraude</div>
          <div>Términos y Condiciones</div>
          <div>Aviso de Privacidad</div>
          <div>Garantía Mecánica</div>
          <div>Contacto en Línea</div>
          <div>Atención para Vendedores y Agencias</div>
        </Links>
      </Col>
    </Row>
  </>
)

export default FooterRight
