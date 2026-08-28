import type { ElementType, ReactNode } from 'react'
import { useReveal } from '../../hooks/useReveal'

interface RevealProps {
  as?: ElementType
  className?: string
  children: ReactNode
}

export default function Reveal({ as: Tag = 'div', className = '', children }: RevealProps) {
  const ref = useReveal<HTMLElement>()
  return (
    <Tag ref={ref as never} className={`reveal ${className}`}>
      {children}
    </Tag>
  )
}
