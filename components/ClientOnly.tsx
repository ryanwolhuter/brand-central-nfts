import { useEffect, useState } from 'react'

interface Props {
  children: React.ReactNode
  delegated?: { [x: string]: any }
}

export default function ClientOnly({ children, ...delegated }: Props) {
  const [hasMounted, setHasMounted] = useState(false)

  useEffect(() => {
    setHasMounted(true)
  }, [])

  return hasMounted
    ? <div {...delegated}>{children}</div>
    : null
}