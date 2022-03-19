import { Card } from "react-bootstrap"

import StyledLink from "../../components/StyledLink"
import { formatNumber } from "../../utils/helpers"

type CategoryCarCardProps = Readonly<{
  id: string
  image: string
  price: number
  title: string
}>

const CategoryCarCard = ({ id, image, price, title }: CategoryCarCardProps) => (
  <StyledLink to={`/car/${id}`}>
    <Card>
      <Card.Img src={image} variant="top" />
      <Card.Body>
        <Card.Title className="text-center">{title}</Card.Title>
        <Card.Text className="text-center text-primary fw-bold">
          $ {formatNumber(price)}
        </Card.Text>
      </Card.Body>
    </Card>
  </StyledLink>
)

export default CategoryCarCard
