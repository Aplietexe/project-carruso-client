import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Form, FormGroup, FormControl } from "react-bootstrap"
import styled from "styled-components"

const StyledForm = styled(Form)`
  width: 50%;
  margin-inline: auto;
  max-width: 300px;

  @media (min-width: 768px) {
    width: 60%;
    margin-inline: auto 0;
  }
`

const SeachIconWrapper = styled.span`
  position: absolute;
  z-index: 2;
  display: block;
  width: 2.375rem;
  height: 2.375rem;
  line-height: 2.375rem;
  text-align: center;
  pointer-events: none;
  color: #aaa;
`

const SeachInput = styled(FormControl)`
  padding-left: 2.375rem;
`

const SearchForm = () => (
  <StyledForm className="d-flex">
    <FormGroup className="w-100">
      <SeachIconWrapper>
        <FontAwesomeIcon icon={faMagnifyingGlass} />
      </SeachIconWrapper>
      <SeachInput
        aria-label="Search"
        placeholder="Encuentra tu próximo auto"
        type="search"
      />
    </FormGroup>
  </StyledForm>
)

export default SearchForm
