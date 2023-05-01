'use client'

import { Typography } from '@components/base'
import { cn } from '@utils'
import { useAnimate, useInView } from 'framer-motion'
import { useEffect } from 'react'

const countNumberTwClass = ``

function CountNumber({ dataTestId, from, to, className }: CountNumberProps) {
  const [scope, animate] = useAnimate()
  const isInView = useInView(scope, { once: true })

  useEffect(() => {
    const node = scope.current
    if (isInView) {
      const controls = animate(from, to, {
        duration: 4,
        ease: 'easeOut',
        delay: 1,
        onUpdate(value) {
          if (node) node.textContent = `${value.toFixed()}`
        },
      })
      return () => controls.stop()
    }
  }, [isInView])

  return (
    <Typography
      ref={scope}
      dataTestId={dataTestId}
      text={`${from}`}
      typo="h3"
      font="inter"
      className={cn(countNumberTwClass, className)}
    />
  )
}
export default CountNumber

interface CountNumberProps {
  dataTestId: string
  from: number
  to: number
  className?: string
}
