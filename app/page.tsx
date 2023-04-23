// import Image from 'next/image'

import { Typography } from '@components/base'
import { VideosSlider } from '@components/compound'

function HomePage() {
  return (
    <>
      {/* First section - home page */}
      {/* use `h-full-no-nav` instead of `h-[100svh]` cuz we need to subtract the nav height */}
      <div
        data-test-id="homepage-foundation"
        className="h-full-no-nav custom-container grid w-auto grid-rows-3"
      >
        <div></div>
        <div
          data-test-id="welcome-text-heading-container"
          className="flex w-[18rem] flex-col sm:w-[26rem] md:w-[32rem] lg:w-[38rem]"
        >
          <Typography
            dataTestId="welcome-title-text-top"
            text="Hey there!"
            typo="h1"
            font="righteous"
            size="d-lg"
          />
          <Typography
            dataTestId="welcome-title-text-bottom"
            text="Welcome to In-tuned,"
            typo="h1"
            font="righteous"
            size="d-lg"
          />

          <div
            data-test-id="welcome-text-description-container"
            className="mt-2"
          >
            <Typography
              dataTestId="welcome-subtitle-text"
              text="We are passionate about AI and its potential to transform our world. Stay ahead of the curve and be in-tuned with the future of technology."
              typo="lead"
              font="inter"
              size="d-md"
            />
          </div>
        </div>
      </div>
      {/* Second section - video carousel */}
      <div
        data-test-id="videos-slider-foundation"
        className="grid h-[100svh] w-auto grid-rows-2 py-20 dark:bg-brandBg"
      >
        <div
          data-test-id="videos-slider-container"
          className="flex flex-col justify-center gap-5 overflow-auto"
        >
          <Typography
            dataTestId="welcome-subtitle-text"
            text="Start exploring the world of AI now at our channel"
            typo="h3"
            font="inter"
            className="custom-container self-center text-center text-sm sm:text-xl md:text-2xl"
          />
          {/* @ts-expect-error Async Server Component */}
          <VideosSlider />
        </div>
      </div>
    </>
  )
}
export default HomePage
