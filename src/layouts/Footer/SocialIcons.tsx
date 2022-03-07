import { Row } from "react-bootstrap"
import { SocialIcon } from "react-social-icons"
import styled from "styled-components"

const StyledIcon = styled(SocialIcon)`
  width: 40px !important;
  height: 40px !important;
  margin: 5px;
`

const SocialIcons = () => (
  <Row className="justify-content-evenly">
    <StyledIcon
      fgColor="white"
      url="https://facebook.com/Carruso-Seminuevos-101200295816232"
    />
    <StyledIcon fgColor="white" url="https://twitter.com/" />
    <StyledIcon
      fgColor="white"
      url="https://instagram.com/ricardo.g.rosas/?hl=es-la/"
    />
  </Row>
)

export default SocialIcons
