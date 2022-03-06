import { Container } from "react-bootstrap"

import Footer from "./Footer"
import Category from "./Category"
import Header from "./Header"
import Home from "./Home"
import FraudProtection from "./FraudProtection"

const App = () => (
  <Container fluid>
    <Header />
    {/* <Home /> */}
    {/* <Category category="seminew" displayName="CARRUSO-SEMINUEVOS" /> */}
    <FraudProtection />
    <Footer />
  </Container>
)

export default App
