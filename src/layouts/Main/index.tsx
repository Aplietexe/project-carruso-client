import { Row, Col } from "react-bootstrap"
import { Routes, Route } from "react-router-dom"

import Warranty from "../../pages/Warranty"
import PrivacyNotice from "../../pages/PrivacyNotice"
import TermsAndConditions from "../../pages/TermsAndConditions"
import Home from "../../pages/Home"
import FraudProtection from "../../pages/FraudProtection"
import Contact from "../../pages/Contact"
import CreditRequest from "../../pages/CreditRequest"
import Category from "../../pages/Category"
import CarRoute from "../../routers/CarRouter"

const seminewCategory = (
  <Category category="seminew" displayName="Carruso Seminuevos" />
)

const utilityCategory = (
  <Category category="utility" displayName="Carruso Utilitarios" />
)

const newCategory = <Category category="new" displayName="Carruso Nuevos" />

const home = <Home />
const fraudProtection = <FraudProtection />
const termsAndConditions = <TermsAndConditions />
const privacyNotice = <PrivacyNotice />
const warranty = <Warranty />
const contact = <Contact />
const creditRequest = <CreditRequest />
const carRoute = <CarRoute />

const Main = () => (
  <Row as="main">
    <Col>
      <Routes>
        <Route element={home} path="/" />
        <Route element={seminewCategory} path="category/seminew" />
        <Route element={utilityCategory} path="category/utility" />
        <Route element={newCategory} path="category/new" />
        <Route element={fraudProtection} path="fraud-protection" />
        <Route element={termsAndConditions} path="terms-and-conditions" />
        <Route element={privacyNotice} path="privacy-notice" />
        <Route element={warranty} path="warranty" />
        <Route element={contact} path="contact" />
        <Route element={creditRequest} path="credit-request" />
        <Route element={carRoute} path="car/:id" />
      </Routes>
    </Col>
  </Row>
)

export default Main
