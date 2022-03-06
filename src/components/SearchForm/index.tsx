import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { type ChangeEventHandler, useCallback } from "react"
import { Form, FormGroup, FormControl } from "react-bootstrap"
import styled from "styled-components"

import type { SetState } from "../../helpers"

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

interface SearchFormProps {
  className?: string
  placeholder: string
  search: string
  setSearch: SetState<string>
}

const SearchForm = ({
  className,
  placeholder,
  search,
  setSearch,
}: Readonly<SearchFormProps>) => {
  const handleChange: ChangeEventHandler<HTMLInputElement> = useCallback(
    (event) => {
      setSearch(event.target.value)
    },
    [setSearch],
  )

  return (
    <Form className={className}>
      <FormGroup className="w-100">
        <SeachIconWrapper>
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </SeachIconWrapper>
        <SeachInput
          aria-label="Search"
          onChange={handleChange}
          placeholder={placeholder}
          type="search"
          value={search}
        />
      </FormGroup>
    </Form>
  )
}

export default SearchForm
