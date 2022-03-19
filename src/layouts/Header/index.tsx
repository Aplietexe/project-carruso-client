import { useState } from "react"
import {
  Navbar,
  Container,
  Nav,
  Image as ImageComponent,
  Row,
} from "react-bootstrap"
import styled from "styled-components"

import carrusoLogo from "../../assets/images/header/carruso-logo.webp"
import SearchForm from "../../components/SearchForm"
import StyledLink from "../../components/StyledLink"

import NavLink from "./NavLink"

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
    <Row>
      <Navbar bg="light" expand="md">
        <StyledContainer fluid>
          <Navbar.Brand className="me-0">
            <StyledLink to="/">
              <ImageComponent className="py-3" fluid src={carrusoLogo} />
            </StyledLink>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="w-100 justify-content-evenly my-2 my-md-0"
              navbarScroll
            >
              <NavLink to="/category/seminew">CARRUSO SEMINUEVOS</NavLink>
              <NavLink to="/category/utility">CARRUSO UTILITARIOS</NavLink>
              <NavLink to="/category/new">CARRUSO NUEVOS</NavLink>
            </Nav>
            <StyledSearchForm
              placeholder="Encuentra tu próximo auto"
              search={search}
              setSearch={setSearch}
            />
          </Navbar.Collapse>
        </StyledContainer>
      </Navbar>
    </Row>
  )
}

export default Header
