'use client'

import { Typography } from '@components'
import Marquee from 'react-fast-marquee'
import { Triangle } from 'lucide-react'

const marqueeTextTwClass = {
  motionContainer: ``,
}

function MarqueeText() {
  return (
    <Marquee className="border-y-2 py-2 " autoFill={true} speed={200}>
      <Triangle
        color="#DEBF05"
        className="mx-4 h-[1rem] w-[1rem] sm:w-[1.5rem] md:h-[2rem]"
      />
      <Typography
        dataTestId="scroll-text-typo"
        text="Get a glimpse into the future"
        typo="h3"
        font="inter"
        className="text-base uppercase md:text-xl"
      />
    </Marquee>
  )
}
export default MarqueeText
