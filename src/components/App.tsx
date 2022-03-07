import { Container } from "react-bootstrap"

import Footer from "./Footer"
// import Category from "./Category"
import Header from "./Header"
import PrivacyNotice from "./PrivacyNotice"
import TermsAndConditions from "./TermsAndConditions"
// import Home from "./Home"
// import FraudProtection from "./FraudProtection"

const App = () => (
  <Container fluid>
    <Header />
    {/* <Home /> */}
    {/* <Category category="seminew" displayName="CARRUSO-SEMINUEVOS" /> */}
    {/* <FraudProtection /> */}
    {/* <TermsAndConditions /> */}
    <PrivacyNotice />
    <Footer />
  </Container>
)

export default App
