import type { DependencyList } from "react"
import { useState, useEffect } from "react"

import { baseUrl } from "../../globals"
import type { JsonValue } from "../types"

type UseFetchOptions = Readonly<{
  parameters?: { readonly [k: string]: string }
}>

type UseFetchReturnValue<T> =
  | {
      error: string
      isLoading: false
      value: undefined
    }
  | {
      error: undefined
      isLoading: false
      value: T
    }
  | {
      error: undefined
      isLoading: true
      value: undefined
    }

const loadingState = {
  error: undefined,
  isLoading: true,
  value: undefined,
} as const

const useFetch = <T extends JsonValue>(
  path: string,
  { parameters }: UseFetchOptions,
  dependencies: DependencyList,
): UseFetchReturnValue<T> => {
  const [state, setState] = useState<UseFetchReturnValue<T>>(loadingState)

  const stringParameters = parameters
    ? `?${new URLSearchParams(parameters).toString()}`
    : ""

  const url = baseUrl + path + stringParameters

  useEffect(() => {
    const controller = new AbortController()
    const { signal } = controller

    const request = async () => {
      try {
        setState(loadingState)

        const response = await fetch(url, {
          headers: {
            "Content-Type": "application/json",
          },

          signal,
        })

        if (!response.ok) throw new Error(`Error fetching ${url}`)

        const json = (await response.json()) as JsonValue

        if (!signal.aborted)
          setState({
            error: undefined,
            isLoading: false,
            value: json as T,
          })
      } catch (caughtError) {
        const error =
          caughtError instanceof Error ? caughtError.message : "Unknown Error"

        if (!signal.aborted)
          setState({
            error,
            isLoading: false,
            value: undefined,
          })
      }
    }

    void request()

    return () => {
      controller.abort()
    }
  }, dependencies)

  return state
}

export default useFetch
