import type { ComponentType } from "react"
import { useParams } from "react-router-dom"

// eslint-disable-next-line @typescript-eslint/prefer-readonly-parameter-types
const withId = (WrappedComponent: ComponentType<{ id: string }>) => {
  const WithId = () => {
    const { id } = useParams()
    return id ? <WrappedComponent id={id} /> : <p>Please provide an ID</p>
  }

  WithId.displayName = "WithId"

  return WithId
}
export default withId
