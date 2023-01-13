import { faPencil } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Container, Image as ImageComponent, Table } from "react-bootstrap"
import styled from "styled-components"

import PageTitle from "../../../components/PageTitle"
import StyledLink from "../../../components/StyledLink"
import {
  formatCategory,
  formatDatetime,
  formatPrice,
} from "../../../utils/helpers"
import { useFetch } from "../../../utils/hooks"
import type { BasicDetailsCar } from "../../../utils/types"

import DeleteAction from "./DeleteAction"

const StyledImage = styled(ImageComponent)`
  width: 250px;
  object-fit: cover;
  aspect-ratio: 4 / 3;
  padding: 0 !important;
`

const ImageCell = styled.td`
  width: 250px;
  padding: 0 !important;
`

const StyledCell = styled.td`
  vertical-align: middle;
  text-align: center;
`

const Cars = () => {
  const { error, isLoading, value } = useFetch<BasicDetailsCar[]>(
    "/cars",
    {},
    [],
  )

  if (error !== undefined) return <p>{error}</p>
  if (isLoading) return <div />

  return (
    <>
      <PageTitle title="Gestionar Autos" />
      <Container className="mb-5">
        <Table bordered hover>
          <thead>
            <tr>
              <th className="text-center">Imagen principal</th>
              <th className="text-center">Título</th>
              <th className="text-center">Precio</th>
              <th className="text-center">Categoría</th>
              <th className="text-center">Fecha de Creación</th>
              <th className="text-center">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {value.map(({ _id, image, title, price, category, date }) => (
              <tr key={_id}>
                <ImageCell>
                  <StyledImage src={image} />
                </ImageCell>
                <StyledCell>{title}</StyledCell>
                <StyledCell>{formatPrice(price)}</StyledCell>
                <StyledCell>{formatCategory(category)}</StyledCell>
                <StyledCell>{formatDatetime(date)}</StyledCell>
                <StyledCell>
                  <DeleteAction id={_id} />
                  <StyledLink to={`/car/edit/${_id}`}>
                    <FontAwesomeIcon icon={faPencil} />
                  </StyledLink>
                </StyledCell>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
    </>
  )
}

export default Cars
