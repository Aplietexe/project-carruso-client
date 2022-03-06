import { Card } from "react-bootstrap"

import { formatNumber } from "../../helpers"

interface CategoryCarCardProps {
  image: string
  price: number
  title: string
}

const CategoryCarCard = ({
  image,
  price,
  title,
}: Readonly<CategoryCarCardProps>) => (
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
