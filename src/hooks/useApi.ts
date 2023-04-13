import { useState, useEffect } from 'react'

export interface IApi<T, K> {
  params?: Record<string, string>
  sanitizeData?: (data: K) => T
}

// eslint-disable-next-line @typescript-eslint/restrict-template-expressions
const BASE_URL = `${import.meta.env.VITE_CHAT_API}/?token=${import.meta.env.VITE_CHAT_API_TOKEN}`

const buildUrl = (params?: Record<string, string>) => {
  const paramsArr: string[] = []

  if (params != null) {
    Object.entries(params).reduce((acc, key) => {
      acc.push(`${key[0]}=${key[1]}`)
      return acc
    }, paramsArr)
  }

  return BASE_URL + '&' + paramsArr.join('&')
}

export const useApi = <T, K>(props: IApi<T, K>) => {
  const { params = {}, sanitizeData } = props
  const [response, setResponse] = useState<T[]>([])
  const [isLoading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>()

  useEffect(() => {
    const fetchData = async () => {
      const baseUrl = buildUrl(params)
      const res = await fetch(baseUrl)
      const data = await res.json()
      const sanitizedData = data.map((d: K) => {
        if (sanitizeData != null) return sanitizeData(d)
        return d
      })

      setResponse(sanitizedData)
    }

    try {
      setLoading(true)
      fetchData().catch(err => setError((err as Error).message))
    } catch (err) {
      setError((err as Error).message)
    } finally {
      setLoading(false)
    }
  }, [])

  return {
    data: response,
    loading: isLoading,
    setData: setResponse,
    error
  }
}
