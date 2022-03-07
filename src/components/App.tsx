import { Container } from "react-bootstrap"

import Footer from "./Footer"
import Category from "./Category"
import Header from "./Header"
import Warranty from "./Warranty"
import PrivacyNotice from "./PrivacyNotice"
import TermsAndConditions from "./TermsAndConditions"
import Home from "./Home"
import FraudProtection from "./FraudProtection"

const App = () => (
  <Container fluid>
    <Header />
    {/* <Home /> */}
    {/* <Category category="seminew" displayName="Carruso Seminuevos" /> */}
    {/* <FraudProtection /> */}
    {/* <TermsAndConditions /> */}
    {/* <PrivacyNotice /> */}
    <Warranty />
    <Footer />
  </Container>
)

export default App
