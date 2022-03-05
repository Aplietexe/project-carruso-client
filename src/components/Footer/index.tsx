import { Col, Container, Row } from "react-bootstrap"
import styled from "styled-components"

import FooterLeft from "./FooterLeft"
import FooterRight from "./FooterRight"

const StyledContainer = styled(Container)`
  font-size: 14px;
  color: white;
`

const Footer = () => (
  <StyledContainer fluid>
    <Row className="bg-primary mt-3 py-3 align-items-center">
      <Col sm={6}>
        <FooterLeft />
      </Col>
      <Col className="mt-3 mt-sm-0" sm={6}>
        <FooterRight />
      </Col>
    </Row>
  </StyledContainer>
)

export default Footer
