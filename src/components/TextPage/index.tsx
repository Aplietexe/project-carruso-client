import type { ReactNode } from "react"
import { Container } from "react-bootstrap"
import styled from "styled-components"

import type { DeepReadonly } from "../../helpers"
import PageTitle from "../PageTitle"

type TextPageProps = DeepReadonly<{
  children: ReactNode
  title: string
}>

const StyledText = styled.div`
  text-align: justify;
`

const TextPage = ({ children, title }: TextPageProps) => (
  <Container className="my-5">
    <PageTitle title={title} />
    <StyledText>{children}</StyledText>
  </Container>
)

export default TextPage
