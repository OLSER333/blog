import { useEffect, useState } from 'react'

export function useStorageWatch(key: string) {
  const [val, setVal] = useState(sessionStorage.getItem(key))

  useEffect(() => {
    const handler = () => val !== sessionStorage.getItem(key) && setVal(sessionStorage.getItem(key))
    window.addEventListener('storage', handler)
    return () => window.removeEventListener('storage', handler)
  }, [])

  useEffect(() => {
    setVal(sessionStorage.getItem(key))
  }, [key])

  return val
}
