'use client'

import { Typography } from '@components/base'
import { cn } from '@utils'
import { useAnimate, useInView } from 'framer-motion'
import { useEffect, useRef } from 'react'

const countNumberTwClass = {
  container: ``,
  text: `relative z-[2] mx-auto`,
}

function CountNumber({
  dataTestId,
  from,
  to,
  textClassName,
}: CountNumberProps) {
  const backgroundGradientRef = useRef<HTMLDivElement>(null)
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
          if (node) {
            node.textContent = `${value.toFixed()}`
            backgroundGradientRef.current?.classList.add('bg-blue-600')
            // console.log(backgroundGradientRef.current?.className)
          }
        },
        onComplete() {
          backgroundGradientRef.current?.classList.remove('bg-blue-600')
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
      className={cn(countNumberTwClass.text, textClassName)}
    />
  )
}
export default CountNumber

interface CountNumberProps {
  dataTestId: string
  from: number
  to: number
  className?: string
  textClassName?: string
}
