import { Col, Container, Image as ImageComponent, Row } from "react-bootstrap"

import fraudProtectionImage from "../../assets/images/fraud-protection/fraud-protection-banner.webp"
import fingerprintMagnifyingGlassImage from "../../assets/images/fraud-protection/fingerprint-magnifying-glass-image.webp"
import carSaleImage from "../../assets/images/fraud-protection/car-sale-image.webp"
import Banner from "../Banner"

const FraudProtection = () => (
  <>
    <Banner image={fraudProtectionImage} />
    <Container>
      <h1 className="display-1 text-center mb-5">
        En carruso nos preocupamos por tu seguridad
      </h1>
      <Row className="align-items-center">
        <Col className="p-0" md={3}>
          <ImageComponent
            className="w-100"
            src={fingerprintMagnifyingGlassImage}
          />
        </Col>
        <Col md={9}>
          <div className="fs-3 py-5 px-3 text-center text-md-end">
            Desarrollamos sistemas de seguridad para tu identidad, sin embargo
            el capital humano es el más importante, por eso cada carruso que
            labora en nuestro equipo estará siempre para cuidarte.
          </div>
        </Col>
      </Row>
      <Row className="align-items-center">
        <Col
          className="p-0"
          md={{ order: "first", span: 8 }}
          xs={{ order: "last", span: 12 }}
        >
          <div className="fs-3 py-5 px-3 text-center text-md-start">
            Cuidamos lo que ofrecemos, por eso verificamos la procedencia de
            cada unidad y creamos una compra segura para proteger tu inversión
          </div>
        </Col>
        <Col className="p-0" md={4}>
          <ImageComponent className="w-100" src={carSaleImage} />
        </Col>
      </Row>
    </Container>
    <Row className="bg-danger mt-5">
      <Col>
        <Container>
          <p className="fs-5 text-white text-center py-5">
            Nuestro compromiso es que cuentes con una herramienta transparente,
            NINGÚN INTEGRANTE O ASESOR CARRUSO, podrá solicitar un depósito o un
            apoyo para que se te autorice tu crédito, NO SE PERMITE solicitar
            cables de tus cuentas, NIP, ni un dato que pueda perjudicar tu
            persona, si te encuentras con algún asesor que te pida algo que no
            estés de acuerdo podrás comunicarte al tel 5524421998 o un correo
            denunciando la anomalía ventas@carruso.com.mx
          </p>
        </Container>
      </Col>
    </Row>
  </>
)

export default FraudProtection
