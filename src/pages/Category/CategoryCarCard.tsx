import { Card } from "react-bootstrap"

import { formatNumber } from "../../utils/helpers"

type CategoryCarCardProps = Readonly<{
  image: string
  price: number
  title: string
}>

const CategoryCarCard = ({ image, price, title }: CategoryCarCardProps) => (
  <Card>
    <Card.Img src={image} variant="top" />
    <Card.Body>
      <Card.Title className="text-center">{title}</Card.Title>
      <Card.Text className="text-center text-primary fw-bold">
        $ {formatNumber(price)}
      </Card.Text>
    </Card.Body>
  </Card>
)

export default CategoryCarCard
