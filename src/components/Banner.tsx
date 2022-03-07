import { Image as ImageComponent, Row } from "react-bootstrap"

type BannerProps = Readonly<{
  image: string
}>

const Banner = ({ image }: BannerProps) => (
  <Row>
    <ImageComponent className="w-100 p-0" src={image} />
  </Row>
)

export default Banner
