import { Col, Image as ImageComponent, Row } from "react-bootstrap"

import carrusoLogoWhite from "../../assets/images/footer/carruso-logo-white.webp"

import SocialIcons from "./SocialIcons"

const FooterLeft = () => (
  <>
    <Row>
      <Col className="d-flex justify-content-center align-items-center">
        <ImageComponent className="h-75" fluid src={carrusoLogoWhite} />
      </Col>
    </Row>
    <Row className="mt-2">
      <Col>2019 © SEIR SAS DE CV. Derechos reservados</Col>
    </Row>
    <SocialIcons />
  </>
)

export default FooterLeft
