import { Row, Col } from "react-bootstrap"
import styled from "styled-components"

const Links = styled(Col)`
  --grid-layout-gap: 10px;
  --grid-column-count: 3;
  --grid-item--min-width: 180px;

  display: grid;
  padding-inline: 2rem;
  grid-template-columns: repeat(
    auto-fill,
    minmax(
      max(
        var(--grid-item--min-width),
        calc(
          (100% - (var(--grid-column-count) - 1) * var(--grid-layout-gap)) /
            var(--grid-column-count)
        )
      ),
      1fr
    )
  );
  grid-gap: var(--grid-layout-gap);

  align-items: center;
`

const FooterRight = () => (
  <>
    <Row className="mb-3">
      <Col>PORTAL PARA VENDEDOR / AGENCIA</Col>
    </Row>
    <Row>
      <Links>
        <div>Protección Antifraude</div>
        <div>Términos y Condiciones</div>
        <div>Aviso de Privacidad</div>
        <div>Garantía Mecánica</div>
        <div>Contacto en Línea</div>
        <div>Atención para Vendedores y Agencias</div>
      </Links>
    </Row>
  </>
)

export default FooterRight
