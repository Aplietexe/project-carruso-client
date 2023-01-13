import type { ChangeEventHandler } from "react"
import { useCallback } from "react"
import { FormGroup, FormLabel, FormControl, FormSelect } from "react-bootstrap"

import GridMaxColumns from "../../../../components/GridMaxColumns"
import type { SetState, ValidCategory } from "../../../../utils/types"

type BasicFieldsEditorProps = Readonly<{
  category: ValidCategory
  price: number
  setCategory: SetState<ValidCategory | undefined>
  setPrice: SetState<number | undefined>
  setTitle: SetState<string | undefined>
  title: string
}>

const BasicFieldsEditor = ({
  title,
  price,
  category,
  setTitle,
  setPrice,
  setCategory,
}: BasicFieldsEditorProps) => {
  const handleTitleChange: ChangeEventHandler<HTMLInputElement> = useCallback(
    (event) => {
      setTitle(event.currentTarget.value)
    },
    [setTitle],
  )

  const handlePriceChange: ChangeEventHandler<HTMLInputElement> = useCallback(
    (event) => {
      setPrice(Number.parseInt(event.currentTarget.value, 10))
    },
    [setPrice],
  )

  const handleCategoryChange: ChangeEventHandler<HTMLSelectElement> =
    useCallback(
      (event) => {
        setCategory(event.currentTarget.value as ValidCategory)
      },
      [setCategory],
    )

  return (
    <GridMaxColumns
      className="mb-5 text-center"
      gap="3rem"
      itemMinWidth="250px"
      maxColumns={3}
    >
      <FormGroup>
        <FormLabel>Título</FormLabel>
        <FormControl
          className="text-center"
          onChange={handleTitleChange}
          value={title}
        />
      </FormGroup>
      <FormGroup>
        <FormLabel>Precio</FormLabel>
        <FormControl
          className="text-center"
          onChange={handlePriceChange}
          value={price}
        />
      </FormGroup>
      <FormGroup>
        <FormLabel>Categoría</FormLabel>
        <FormSelect
          className="text-center"
          onChange={handleCategoryChange}
          value={category}
        >
          <option value="new">Nuevo</option>
          <option value="seminew">Seminuevo</option>
          <option value="utility">Utilitario</option>
        </FormSelect>
      </FormGroup>
    </GridMaxColumns>
  )
}

export default BasicFieldsEditor
