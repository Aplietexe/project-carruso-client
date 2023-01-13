import type { DeepReadonly } from "../types"

type ImagesSelectorReducerAction = DeepReadonly<
  | { action: "add"; image: string }
  | { action: "delete"; index: number }
  | { images: string[] }
>

const imagesSelectorReducer = (
  state: readonly string[],
  action: ImagesSelectorReducerAction,
): readonly string[] => {
  if ("images" in action) {
    return action.images
  }

  const newState = Array.from(state)

  if (action.action === "delete") {
    const { index } = action
    newState.splice(index, 1)
    return newState
  }

  const { image } = action
  newState.push(image)
  return newState
}

export default imagesSelectorReducer
export type { ImagesSelectorReducerAction }
