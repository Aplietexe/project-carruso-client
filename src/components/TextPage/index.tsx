import type { ReactNode } from "react"
import { Container } from "react-bootstrap"
import styled from "styled-components"

import type { DeepReadonly } from "../../helpers"

type TextPageProps = DeepReadonly<{
  children: ReactNode
  title: string
}>

const StyledText = styled.div`
  text-align: justify;
`

const TextPage = ({ children, title }: TextPageProps) => (
  <Container className="my-5">
    <h1 className="display-6 text-center mb-4">{title}</h1>
    <StyledText>{children}</StyledText>
  </Container>
)

export default TextPage
