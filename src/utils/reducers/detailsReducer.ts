import type { AtLeastOne, DeepReadonly, DetailType } from "../types"

type DetailsReducerAction = DeepReadonly<
  | { details: DetailType[] }
  | { newDetail: DetailType }
  | (AtLeastOne<DetailType> & { index: number })
>

const detailsReducer = (
  state: readonly DetailType[],
  action: DetailsReducerAction,
): readonly DetailType[] => {
  if ("details" in action) {
    return action.details
  }

  if ("newDetail" in action) {
    return [...state, action.newDetail]
  }

  const newState = Array.from(state)

  const { index, ...newValues } = action

  newState[index] = { ...newState[index], ...newValues }

  return newState
}

export default detailsReducer
export type { DetailsReducerAction }
