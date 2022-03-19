import { Row, Col } from "react-bootstrap"
import styled from "styled-components"

import GridMaxColumns from "../../components/GridMaxColumns"
import StyledLink from "../../components/StyledLink"

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
          <StyledLink to="fraud-protection">Protección Antifraude</StyledLink>
          <StyledLink to="terms-and-conditions">
            Términos y Condiciones
          </StyledLink>
          <StyledLink to="privacy-notice">Aviso de Privacidad</StyledLink>
          <StyledLink to="warranty">Garantía Mecánica</StyledLink>
          <StyledLink to="contact">Contacto en Línea</StyledLink>
          <div>Atención para Vendedores y Agencias</div>
        </Links>
      </Col>
    </Row>
  </>
)

export default FooterRight
