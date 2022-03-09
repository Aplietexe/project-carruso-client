import { Container } from "react-bootstrap"

import Footer from "./layouts/Footer"
import Header from "./layouts/Header"
import Main from "./layouts/Main"

const App = () => (
  <Container fluid>
    <Header />
    <Main />
    <Footer />
  </Container>
)

export default App
