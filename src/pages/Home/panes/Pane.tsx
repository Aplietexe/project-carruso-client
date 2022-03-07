import type { ReactNode } from "react"
import { Col, Row } from "react-bootstrap"
import styled from "styled-components"

import { type DeepReadonly } from "../../../utils/types"

interface ImageAsBackgroundProps {
  source: string
}
type PaneProps = DeepReadonly<{
  children: ReactNode
  imageSource: string
}>

const ImageAsBackground = styled.div<ImageAsBackgroundProps>`
  background-image: url(${({ source }) => source});
  background-position: center;
  background-size: cover;
  border-radius: 0;
  height: 350px;
  width: 100%;

  @media (min-width: 768px) {
    border-radius: 5px;
    height: 100%;
  }
`

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  padding: 1rem 2rem;
`

const Pane = ({ imageSource, children }: PaneProps) => (
  <Row>
    <Col lg={{ offset: 2, span: 8 }} md={12} xl={{ offset: 3, span: 6 }}>
      <Row>
        <Col md={5}>
          <ImageAsBackground source={imageSource} />
        </Col>
        <Col md={7}>
          <Wrapper>
            <div>{children}</div>
          </Wrapper>
        </Col>
      </Row>
    </Col>
  </Row>
)

export default Pane
