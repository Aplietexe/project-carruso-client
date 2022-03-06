// for some reason the generic arrow function causes putout to bug
// eslint-disable-next-line putout/putout
import type { DependencyList } from "react"
import { useState, useEffect } from "react"

type JsonValue =
  | boolean
  | number
  | string
  | readonly JsonValue[]
  | { readonly [x: string]: JsonValue }

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

const useFetch = <T extends JsonValue>(
  path: string,
  { parameters = {} }: UseFetchOptions,
  dependencies: DependencyList,
): UseFetchReturnValue<T> => {
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string>()
  const [value, setValue] = useState<JsonValue>()

  const url = `/api/v1${path}?${new URLSearchParams(parameters).toString()}`

  useEffect(() => {
    const controller = new AbortController()
    const { signal } = controller

    const request = async () => {
      try {
        setIsLoading(true)

        const response = await fetch(url, {
          headers: {
            "Content-Type": "application/json",
          },

          signal,
        })

        if (!response.ok) throw new Error(`Error fetching ${url}`)

        const json = (await response.json()) as JsonValue

        if (!signal.aborted) {
          setIsLoading(false)
          setValue(json)
        }
      } catch (caughtError) {
        const newError =
          caughtError instanceof Error ? caughtError.message : "Unknown Error"

        if (!signal.aborted) {
          setIsLoading(false)
          setError(newError)
        }
      }
    }

    void request()

    return () => {
      controller.abort()
    }
  }, dependencies)

  return { error, isLoading, value } as UseFetchReturnValue<T>
}

export default useFetch
