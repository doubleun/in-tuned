import { Typography } from '@components'
import Marquee from 'react-fast-marquee'
import { Triangle } from 'lucide-react'
import { getChannelDetails } from '@service'

const marqueeTextTwClass = {
  motionContainer: ``,
}

async function MarqueeText() {
  const channelData = (await getChannelDetails({ useMock: true })).items
  const viewCounts = channelData[0].statistics.viewCount

  return (
    <Marquee
      className="border-y-2 py-2 border-y-blue-900 dark:border-y-slate-100 bg-blue-50 dark:bg-transparent"
      autoFill={true}
      speed={100}
    >
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
      <Triangle
        color="#DEBF05"
        className="mx-4 h-[1rem] w-[1rem] sm:w-[1.5rem] md:h-[2rem]"
      />
      <Typography
        dataTestId="scroll-text-typo"
        text={`Current views: ${Number(viewCounts).toLocaleString('en-US')}`}
        typo="h3"
        font="inter"
        className="text-base uppercase md:text-xl dark:text-green-400 text-green-600 font-bold"
      />
    </Marquee>
  )
}
export default MarqueeText
