import { Col, Container, Image as ImageComponent, Row } from "react-bootstrap"

import welcomeImage from "../../assets/images/welcome-image.webp"
import { useBreakpoints } from "../../hooks"

import HomeInfoLarge from "./sizes/HomeInfoLarge"
import HomeInfoSmall from "./sizes/HomeInfoSmall"

const Home = () => {
  const breakpoints = useBreakpoints()

  return (
    <Container fluid>
      <Row>
        <Col>
          <Row>
            <Col className="p-0">
              <ImageComponent className="w-100 p-0" src={welcomeImage} />
            </Col>
          </Row>
          {breakpoints.md ? <HomeInfoLarge /> : <HomeInfoSmall />}
        </Col>
      </Row>
    </Container>
  )
}

export default Home
