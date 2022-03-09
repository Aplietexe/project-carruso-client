import { Row, Col } from "react-bootstrap"

import CarCarousel from "../CarCarrousel"
import CreditSimulator from "../CreditSimulator"
import InfoGallery from "../InfoGallery"
import MainCarInfo from "../MainCarInfo"
import RequestButton from "../RequestButton"
import type { DetailledCar } from "../types"

const CarSmall = ({ details, images, price, title }: DetailledCar) => (
  <Row className="mb-5">
    <CarCarousel images={images} />
    <Col>
      <MainCarInfo price={price} title={title} />
      <InfoGallery items={details} />
      <CreditSimulator price={price} />
      <RequestButton />
    </Col>
  </Row>
)

export default CarSmall
