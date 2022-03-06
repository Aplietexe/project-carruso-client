import { Col, Row } from "react-bootstrap"
import styled from "styled-components"

import FooterLeft from "./FooterLeft"
import FooterRight from "./FooterRight"

const StyledRow = styled(Row)`
  font-size: 14px;
`

const Footer = () => (
  <StyledRow className="bg-primary py-3 align-items-center text-center text-white">
    <Col sm={6}>
      <FooterLeft />
    </Col>
    <Col className="mt-3 mt-sm-0" sm={6}>
      <FooterRight />
    </Col>
  </StyledRow>
)

export default Footer
