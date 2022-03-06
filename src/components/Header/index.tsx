import { useState } from "react"
import {
  Navbar,
  Container,
  Nav,
  Image as ImageComponent,
} from "react-bootstrap"
import styled from "styled-components"

import carrusoLogo from "../../assets/images/carruso-logo.webp"
import SearchForm from "../SearchForm"

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

const StyledSearchForm = styled(SearchForm)`
  display: flex;
  width: 50%;
  margin-inline: auto;
  max-width: 300px;

  @media (min-width: 768px) {
    width: 60%;
    margin-inline: auto 0;
  }
`

const Header = () => {
  const [search, setSearch] = useState("")

  return (
    <Navbar bg="light" expand="md">
      <StyledContainer fluid>
        <Navbar.Brand className="me-0">
          <ImageComponent className="py-3" fluid src={carrusoLogo} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="w-100 justify-content-evenly my-2 my-md-0"
            navbarScroll
          >
            <StyledLink>CARRUSO SEMINUEVOS</StyledLink>
            <StyledLink>CARRUSO UTILITARIOS</StyledLink>
            <StyledLink>CARRUSO NUEVOS</StyledLink>
          </Nav>
          <StyledSearchForm
            placeholder="Encuentra tu próximo auto"
            search={search}
            setSearch={setSearch}
          />
        </Navbar.Collapse>
      </StyledContainer>
    </Navbar>
  )
}

export default Header
