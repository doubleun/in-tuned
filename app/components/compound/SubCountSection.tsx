import { Typography } from '@components/base'
import CountNumber from '@components/base/CountNumber'
import { getChannelDetails, getMostViewedVideos } from '@service'
import Image from 'next/image'

async function SubCountSection() {
  const channelData = (await getChannelDetails({ useMock: false })).items
  const subCount = channelData[0].statistics.subscriberCount

  return (
    <div
      data-test-id="end-home-section-container"
      className="grid h-full w-full"
    >
      {/* Section - sub count */}
      <div
        data-test-id="end-home-background-container"
        className="inset-0 flex flex-col items-center justify-center self-center"
      >
        <Typography
          text="SUBSCRIBERS"
          dataTestId="end-home-background-subscriber-title"
          typo="h3"
          font="inter"
          size="xs"
          className="tracking-[6px] sm:tracking-[10px]"
        />

        {/* Count subscribers - number */}
        <div data-test-id="count-subscribers-container" className="relative">
          <CountNumber
            dataTestId="end-home-background-subscriber-count"
            from={0}
            to={Number(subCount)}
            textClassName="font-outline-2 relative z-[1] h-fit w-fit text-[8rem] font-bold leading-none sm:text-[15rem] md:text-[18rem] lg:text-[24rem]"
          />
          <Typography
            text="*"
            dataTestId="end-home-background-subscriber-count-asterisk"
            typo="h3"
            font="inter"
            className="absolute right-0 top-0 z-[1] text-xl sm:text-2xl md:text-4xl lg:text-6xl"
          />
          {/* Count subscribers - background image*/}
          <div className="absolute top-0 z-[2] h-full w-full mix-blend-lighten dark:mix-blend-darken">
            <Image
              src="/bg.png"
              alt=""
              fill={true}
              className="object-cover brightness-150"
            />
          </div>
        </div>

        <Typography
          text="*Subject to change"
          dataTestId="end-home-background-subscriber-title"
          typo="h3"
          font="inter"
          size="xs"
        />
      </div>
    </div>
  )
}
export default SubCountSection
