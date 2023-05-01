import { cn } from '@utils'
import { VariantProps, cva } from 'class-variance-authority'
import * as fonts from '@fonts'
import React, { ReactNode } from 'react'

const { righteous, inter, roboto, sansPro } = fonts

const defaultTextTwClass = `text-base text-slate-900 dark:text-slate-100 w-fit`

const textVariants = cva(defaultTextTwClass, {
  variants: {
    typo: {
      h1: 'scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl',
      h2: 'scroll-m-20 text-3xl font-semibold tracking-tight',
      h3: 'scroll-m-20 text-2xl font-semibold tracking-tight',
      h4: 'scroll-m-20 text-xl font-semibold tracking-tight',
      clean: 'scroll-m-20 tracking-tight',
      p: 'leading-7 [&:not(:first-child)]:mt-6',
      lead: 'text-xl text-slate-700 dark:text-slate-400',
      code: 'relative rounded bg-slate-100 py-[0.2rem] px-[0.3rem] font-mono text-sm font-semibold text-slate-900 dark:bg-slate-800 dark:text-slate-400',
    },
    weight: {
      normal: 'font-normal',
      bold: 'font-bold',
    },
    style: {
      normal: 'not-italic',
      italic: 'italic',
      divider:
        'border-b border-b-slate-200 pb-2 dark:border-b-slate-700  transition-colors first:mt-0',
    },
    size: {
      xs: 'text-xs',
      sm: 'text-sm',
      md: 'text-base',
      lg: 'text-lg',
      xl: 'text-xl',
      '2xl': 'text-2xl',
      '3xl': 'text-3xl',
      '4xl': 'text-4xl',
      '5xl': 'text-5xl',
      '6xl': 'text-6xl',
      '7xl': 'text-7xl',
      '8xl': 'text-8xl',
      '9xl': 'text-9xl',
      'd-md': 'text-sm sm:text-base md:text-lg lg:text-xl',
      'd-lg': 'text-2xl sm:text-4xl md:text-5xl lg:text-6xl',
    },
    font: {
      righteous: righteous.className,
      inter: inter.className,
      roboto: roboto.className,
      sansPro: sansPro.className,
    },
  },
  compoundVariants: [],
  defaultVariants: {
    typo: 'p',
    weight: 'normal',
    style: 'normal',
  },
})

const Typography = React.forwardRef<HTMLParagraphElement, TextProps>(
  function Text(
    { text, dataTestId, className, ...variantsConfig },
    forwardRef
  ) {
    return (
      <p
        data-test-id={dataTestId}
        className={cn(textVariants(variantsConfig), className)}
        ref={forwardRef}
      >
        {text}
      </p>
    )
  }
)

export default Typography

interface TextProps extends VariantProps<typeof textVariants> {
  text: string
  dataTestId: string
  className?: string | undefined
}
