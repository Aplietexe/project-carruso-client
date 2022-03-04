import {
  Navbar,
  Container,
  Nav,
  Image as ImageComponent,
} from "react-bootstrap"
import styled from "styled-components"

import carrusoLogo from "../../assets/images/carruso-logo.webp"

import SearchForm from "./SearchForm"

const StyledLink = styled(Nav.Link)`
  color: var(--bs-primary) !important;
  font-weight: 600;
  text-align: center;
`

const StyledContainer = styled(Container)`
  width: 97%;
  padding-inline: 0;

  @media screen and (min-width: calc(1400px / 0.85)) {
    width: 85%;
  }
`

const Header = () => (
  <Navbar bg="light" expand="md">
    <StyledContainer fluid>
      <Navbar.Brand className="me-0">
        <ImageComponent className="py-3" fluid src={carrusoLogo} />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Nav className="w-100 justify-content-evenly my-2 my-md-0" navbarScroll>
          <StyledLink>CARRUSO SEMINUEVOS</StyledLink>
          <StyledLink>CARRUSO UTILITARIOS</StyledLink>
          <StyledLink>CARRUSO NUEVOS</StyledLink>
        </Nav>
        <SearchForm />
      </Navbar.Collapse>
    </StyledContainer>
  </Navbar>
)

export default Header
