import { Container, Row, Col } from "react-bootstrap"

import CarCarousel from "../CarCarrousel"
import CreditSimulator from "../CreditSimulator"
import InfoGallery from "../InfoGallery"
import MainCarInfo from "../MainCarInfo"
import RequestButton from "../RequestButton"
import type { DetailledCar } from "../types"

const CarLarge = ({ details, images, price, title }: DetailledCar) => (
  <Container className="my-5">
    <Row>
      <Col lg={6}>
        <CarCarousel images={images} />
        <InfoGallery items={details} />
      </Col>
      <Col lg={6}>
        <MainCarInfo price={price} title={title} />
        <CreditSimulator price={price} />
        <RequestButton />
      </Col>
    </Row>
  </Container>
)

export default CarLarge
