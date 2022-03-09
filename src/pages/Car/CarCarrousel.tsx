import {
  Carousel,
  CarouselItem,
  Image as ImageComponent,
} from "react-bootstrap"

import type { DeepReadonly } from "../../utils/types"

type CarCarouselProps = DeepReadonly<{
  images: string[]
}>

const CarCarousel = ({ images }: CarCarouselProps) => (
  <Carousel className="mb-4 p-0">
    {images.map((image) => (
      <CarouselItem key={image}>
        <ImageComponent className="d-block w-100" fluid src={image} />
      </CarouselItem>
    ))}
  </Carousel>
)

export default CarCarousel
