import { Row, Col } from "react-bootstrap"

import Warranty from "../../pages/Warranty"
import PrivacyNotice from "../../pages/PrivacyNotice"
import TermsAndConditions from "../../pages/TermsAndConditions"
import Home from "../../pages/Home"
import FraudProtection from "../../pages/FraudProtection"
import Contact from "../../pages/Contact"
import CreditRequest from "../../pages/CreditRequest"
import Category from "../../pages/Category"

const Main = () => (
  <Row as="main">
    <Col>
      <Home />
      {/* <Category category="seminew" displayName="Carruso Seminuevos" /> */}
      {/* <FraudProtection /> */}
      {/* <TermsAndConditions /> */}
      {/* <PrivacyNotice /> */}
      {/* <Warranty /> */}
      {/* <Contact /> */}
      {/* <CreditRequest /> */}
    </Col>
  </Row>
)

export default Main
