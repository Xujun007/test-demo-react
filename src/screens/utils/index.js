import { useEffect, useState } from "react"

export const isFalsy = (val) => val === 0 ? false : !val
export const cleanObject = (object) => {
  const result = {...object}
  Object.keys(result).forEach(key => {
    const value = result[key]
    if (isFalsy(value)) {
      delete result[key]
    }
  })
  return result
}

export const useMount = (callback) => {
  useEffect(() => {
    callback()
    // eslint-disable-next-line
  }, [])
}

export const useDebounce = (value, delay) => {
  const [debouncedValue, setDebouncedValue] = useState(value)

  useEffect(() => {
    const timeout = setTimeout(() => setDebouncedValue(value), delay)
    // 每次在上一个useEffect处理完以后再运行
    return () => clearInterval(timeout)
  }, [value, delay])

  return debouncedValue
}