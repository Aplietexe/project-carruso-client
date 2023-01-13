import type { DependencyList } from "react"
import { useCallback, useState } from "react"

import { baseUrl } from "../../globals"
import type { JsonValue } from "../types"

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

interface UseSendData {
  (
    path: string,
    options: Readonly<{ method: "DELETE" }>,
    dependencies: DependencyList,
  ): State & { sendData: (resource: string) => void }
  (
    path: string,
    options: Readonly<{ method: "POST" | "PUT" }>,
    dependencies: DependencyList,
  ): State & { sendData: (data: JsonValue | Readonly<FormData>) => void }
}

const useSendData: UseSendData = (path, { method }, dependencies) => {
  const [state, setState] = useState<State>({
    error: undefined,
    isLoading: false,
    isSuccessful: false,
  })

  const sendData = useCallback(
    // Making FormData readonly breaks narrowing
    // eslint-disable-next-line @typescript-eslint/prefer-readonly-parameter-types
    (resourceOrData: FormData | JsonValue | string) => {
      let url: string
      let body: string | undefined

      if (method === "DELETE" && typeof resourceOrData === "string") {
        url = baseUrl + path + resourceOrData
      } else {
        url = baseUrl + path
        body =
          resourceOrData instanceof FormData
            ? JSON.stringify(Object.fromEntries(resourceOrData))
            : JSON.stringify(resourceOrData)
      }

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
    },
    dependencies,
  )

  return { ...state, sendData }
}

export default useSendData
