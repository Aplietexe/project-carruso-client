import type { DependencyList } from "react"
import { useCallback, useState } from "react"

import { baseUrl } from "../../globals"
import type { JsonValue } from "../types"

type UseSendDataOptions = Readonly<{
  method: "DELETE" | "POST" | "PUT"
}>

interface SendData {
  (data: JsonValue | Readonly<FormData>): void
}

type State =
  | {
      error: string
      isLoading: false
      isSuccessful: false
    }
  | {
      error: undefined
      isLoading: false
      isSuccessful: false
    }
  | {
      error: undefined
      isLoading: false
      isSuccessful: true
    }
  | {
      error: undefined
      isLoading: true
      isSuccessful: false
    }

type UseSendDataReturnValue = State & { sendData: SendData }

const useSendData = (
  path: string,
  { method }: UseSendDataOptions,
  dependencies: DependencyList,
): UseSendDataReturnValue => {
  const [state, setState] = useState<State>({
    error: undefined,
    isLoading: false,
    isSuccessful: false,
  })

  const url = baseUrl + path

  const sendData: SendData = useCallback((data) => {
    const body =
      data instanceof FormData
        ? JSON.stringify(Object.fromEntries(data))
        : JSON.stringify(data)

    const request = async () => {
      try {
        setState({
          error: undefined,
          isLoading: true,
          isSuccessful: false,
        })

        const response = await fetch(url, {
          body,

          headers: {
            "Content-Type": "application/json",
          },

          method,
        })

        if (!response.ok) throw new Error(`Error sending data to ${url}`)

        setState({
          error: undefined,
          isLoading: false,
          isSuccessful: true,
        })
      } catch (caughtError) {
        const error =
          caughtError instanceof Error ? caughtError.message : "Unknown Error"

        setState({
          error,
          isLoading: false,
          isSuccessful: false,
        })
      }
    }

    void request()
  }, dependencies)

  return { ...state, sendData }
}

export default useSendData
