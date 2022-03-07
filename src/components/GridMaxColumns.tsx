import styled from "styled-components"

type GridMaxColumnsProps = Readonly<{
  gap: string
  itemMinWidth: string
  maxColumns: number
}>

const gap = (props: GridMaxColumnsProps) => props.gap
const itemMinWidth = (props: GridMaxColumnsProps) => props.itemMinWidth
const maxColumns = (props: GridMaxColumnsProps) => props.maxColumns

const GridMaxColumns = styled.div<GridMaxColumnsProps>`
  display: grid;
  grid-template-columns: repeat(
    auto-fill,
    minmax(
      max(
        ${itemMinWidth},
        calc((100% - ((${maxColumns} - 1) * ${gap})) / ${maxColumns})
      ),
      1fr
    )
  );

  gap: ${gap};
`

export default GridMaxColumns
