import { Container } from "react-bootstrap"

import Footer from "./layouts/Footer"
import Category from "./pages/Category"
import Header from "./layouts/Header"
import Warranty from "./pages/Warranty"
import PrivacyNotice from "./pages/PrivacyNotice"
import TermsAndConditions from "./pages/TermsAndConditions"
import Home from "./pages/Home"
import FraudProtection from "./pages/FraudProtection"
import Contact from "./pages/Contact"

const App = () => (
  <Container fluid>
    <Header />
    {/* <Home /> */}
    {/* <Category category="seminew" displayName="Carruso Seminuevos" /> */}
    {/* <FraudProtection /> */}
    {/* <TermsAndConditions /> */}
    {/* <PrivacyNotice /> */}
    {/* <Warranty /> */}
    <Contact />
    <Footer />
  </Container>
)

export default App
