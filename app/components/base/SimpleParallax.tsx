'use client'

import { ReactNode, useRef } from 'react'
import { motion, useScroll } from 'framer-motion'
import useParallax from '@hooks/useParallax'
import { ExceptFirstParameter } from '@types'
import { cva } from 'class-variance-authority'
import { cn } from '@utils'

// const defaultParallaxTwClass = `absolute z-[1]`
const defaultParallaxTwClass = `relative h-fit w-fit`

// [&>div.parallaxOffset]:sm:-left-32
// [&>div.parallaxOffset]:sm:right-20
const simpleParallaxVariant = cva(defaultParallaxTwClass, {
  variants: {
    align: {
      left: `
        mr-auto
        [&>div.parallaxOffset]:-right-20
        [&>div.parallaxOffset]:left-10
        [&>div.parallaxOffset]:sm:-right-[17rem]
        [&>div.parallaxOffset]:sm:left-[14rem]
        [&>div.parallaxOffset]:md:-right-[22rem]
        [&>div.parallaxOffset]:md:left-[22rem]
      `,
      right: `
        ml-auto
        [&>div.parallaxOffset]:-left-16
        [&>div.parallaxOffset]:right-24
        [&>div.parallaxOffset]:sm:-left-[8rem]
        [&>div.parallaxOffset]:sm:right-[5rem]
        [&>div.parallaxOffset]:md:-left-[10rem]
        [&>div.parallaxOffset]:md:right-[10rem]
      `,
      center: `
      m-auto
      [&>div.parallaxOffset]:-right-20
      [&>div.parallaxOffset]:left-10
    `,
    },
  },
  defaultVariants: {
    align: 'right',
  },
})

/**
 * Simple parallax section that will cover 100% width and height space of the parent
 */
function SimpleParallax({
  dataTestId,
  mainComponent,
  offsetComponent,
  parallaxSettings = [0, 1, 300, 0],
  ...variantsConfig
}: SimpleParallaxProps) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref })
  const y = useParallax(scrollYProgress, ...parallaxSettings)

  return (
    <article
      data-test-id={dataTestId}
      className={cn(simpleParallaxVariant(variantsConfig))}
    >
      <motion.div
        style={{ y }}
        className="absolute z-[1] parallaxOffset"
        data-test-id="parallax-offset-component"
      >
        {offsetComponent}
      </motion.div>
      <div
        ref={ref}
        data-test-id="parallax-main-component"
        className="parallaxMain"
      >
        {mainComponent}
      </div>
    </article>
  )
}
export default SimpleParallax

interface SimpleParallaxProps {
  dataTestId: string
  mainComponent: ReactNode
  offsetComponent: ReactNode
  align?: 'left' | 'center' | 'right'
  parallaxSettings?: ExceptFirstParameter<Parameters<typeof useParallax>>
}
