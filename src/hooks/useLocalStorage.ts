import { useState } from 'react'

export interface IUseLocalStorage<T> {
  key: string
  initialValue?: T
}

export const useLocalStorage = <T>(props: IUseLocalStorage<T>) => {
  const { key, initialValue } = props
  const [value, setValue] = useState<T>(() => {
    try {
      const item = window.localStorage.getItem(key)

      if (item == null) {
        window.localStorage.setItem(key, JSON.stringify(initialValue))
      }

      return (item != null) ? JSON.parse(item) : initialValue
    } catch (error) {
      console.log(error)

      return initialValue
    }
  })

  const storeToLocalStorage = (data: T) => {
    setValue(data)
    window.localStorage.setItem(key, JSON.stringify(data))
  }

  return [value, storeToLocalStorage] as const
}
