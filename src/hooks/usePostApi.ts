/* eslint-disable @typescript-eslint/restrict-template-expressions */
import { useState } from 'react'

export interface IUsePostApi<T, K> {
  sanitizeData?: (data: K) => T
}

const BASE_URL = `${import.meta.env.VITE_CHAT_API}`

const OPTIONS = {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    token: `${import.meta.env.VITE_CHAT_API_TOKEN}`
  }
}

export const usePostApi = <T, K>(props: IUsePostApi<T, K>) => {
  const { sanitizeData } = props
  const [response, setResponse] = useState<T>()
  const [isLoading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>()

  const postData = async (body: any) => {
    try {
      setLoading(true)

      const res = await fetch(BASE_URL, { ...OPTIONS, body: JSON.stringify(body) })
      const data = await res.json()
      const sanitizedData = (sanitizeData != null) ? sanitizeData(data) : data

      setResponse(sanitizedData)
    } catch (err) {
      setError((err as Error).message)
    } finally {
      setLoading(false)
    }
  }

  return {
    data: response,
    loading: isLoading,
    postData,
    error
  }
}
