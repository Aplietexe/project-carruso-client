import { Card } from "react-bootstrap"
import styled from "styled-components"

import type { DeepReadonly } from "../../utils/types"

type InfoGalleryProps = DeepReadonly<{
  items: {
    body: string
    title: string
  }[]
}>

const FlexWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1em;

  & > * {
    flex-grow: 1;
  }
`

const StyledCard = styled(Card)`
  box-shadow: 0 0 12px -2px #6c757d;
  border: none;
`

const InfoGallery = ({ items }: InfoGalleryProps) => (
  <FlexWrapper className="my-4">
    {items.map(({ body, title }) => (
      <StyledCard key={title + body}>
        <Card.Header className="bg-secondary text-white text-center">
          {title}
        </Card.Header>
        <Card.Body>
          <Card.Text className="text-center">{body}</Card.Text>
        </Card.Body>
      </StyledCard>
    ))}
  </FlexWrapper>
)

export default InfoGallery
