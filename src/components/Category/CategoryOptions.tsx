import { type ChangeEventHandler, useCallback } from "react"
import { Col, FormSelect, InputGroup, Row } from "react-bootstrap"

import type { SetState } from "../../helpers"
import SearchForm from "../SearchForm"

import type { Sort } from "./types"

type CategoryOptionsProps = Readonly<{
  search: string
  setSearch: SetState<string>
  setSort: SetState<Sort>
}>

const CategoryOptions = ({
  search,
  setSearch,
  setSort,
}: CategoryOptionsProps) => {
  const handleChange: ChangeEventHandler<HTMLSelectElement> = useCallback(
    (event) => {
      setSort(event.target.value as Sort)
    },
    [setSort],
  )
  return (
    <Row className="justify-content-between">
      <Col className="mb-2 mb-md-0" lg={4} md={6} xs={12}>
        <SearchForm
          placeholder="Buscar"
          search={search}
          setSearch={setSearch}
        />
      </Col>
      <Col lg={4} md={6} xs={12}>
        <InputGroup>
          <InputGroup.Text>Ordenar por</InputGroup.Text>
          <FormSelect onChange={handleChange}>
            <option value="newest">Más nuevos</option>
            <option value="price">Precio: del más bajo al más alto</option>
            <option value="priceInverted">
              Precio: del más alto al más bajo
            </option>
            <option value="title">Nombre: A a la Z</option>
            <option value="titleInverted">Nombre: Z a la A</option>
          </FormSelect>
        </InputGroup>
      </Col>
    </Row>
  )
}

export default CategoryOptions
