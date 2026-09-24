import type { CSSProperties, ElementType, ReactNode } from 'react'
import { useReveal } from '../../hooks/useReveal'

interface RevealProps {
  as?: ElementType
  className?: string
  children: ReactNode
  /** Which way the element travels in as it appears. */
  variant?: 'up' | 'left' | 'right' | 'zoom'
  /** Optional transition delay in ms — use for staggering grids. */
  delay?: number
}

export default function Reveal({
  as: Tag = 'div',
  className = '',
  children,
  variant = 'up',
  delay = 0,
}: RevealProps) {
  const ref = useReveal<HTMLElement>()
  const variantClass =
    variant === 'left' ? ' reveal-left' : variant === 'right' ? ' reveal-right' : variant === 'zoom' ? ' reveal-zoom' : ''
  const style: CSSProperties | undefined = delay ? { transitionDelay: `${delay}ms` } : undefined

  return (
    <Tag ref={ref as never} className={`reveal${variantClass} ${className}`} style={style}>
      {children}
    </Tag>
  )
}