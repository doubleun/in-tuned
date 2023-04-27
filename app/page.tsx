import Image from 'next/image'

import { ImageStack, Typography } from '@components/base'
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
      {/* TODO: extract these "section" into a component */}
      {/* Second section - tools */}
      <div
        data-test-id="tools-foundation"
        className="custom-container flex h-[100svh] w-auto flex-col justify-center gap-6 dark:bg-brandBg md:py-12"
      >
        <Typography
          dataTestId="tools-title"
          text="What we use"
          typo="h3"
          font="serif"
          className="text-lg font-light sm:text-2xl md:text-3xl"
        />
        <div data-test-id="tools-image-stack-container">
          <ImageStack
            dataTestId="tools-image-stack-list"
            images={[
              {
                src: '/icons/chatGPT.png',
                dataTestId: 'chat-GPT-icon',
                alt: 'chatGPTIcon',
                className: 'object-contain',
                text: 'Chat GPT',
              },
              {
                src: '/icons/midjourney.jpeg',
                dataTestId: 'midjourney-icon',
                alt: 'midjourneyIcon',
                className: 'object-contain',
                text: 'Midjourney',
              },
              {
                src: '/icons/leonardo.svg',
                dataTestId: 'leonardo-icon',
                alt: 'leonardoIcon',
                className: 'object-contain',
                text: 'Leonardo',
              },
              {
                src: '/icons/runway.png',
                dataTestId: 'runway-icon',
                alt: 'runwayIcon',
                className: 'object-contain',
                text: 'Runway',
              },
            ]}
          />
        </div>
      </div>
      {/* Third section - video carousel */}
      <div
        data-test-id="videos-slider-foundation"
        className="flex h-[100svh] w-auto flex-col justify-center gap-6 pt-12 dark:bg-brandBg sm:gap-14"
      >
        {/* Sub section I: Text */}
        <div
          data-test-id="videos-slider-title-container"
          className="custom-container flex flex-col justify-between sm:flex-row"
        >
          <Typography
            dataTestId="videos-slider-title-left"
            text="Some of our work"
            typo="h3"
            font="serif"
            className="text-lg font-light sm:text-2xl md:text-3xl"
          />
          <div className="sm:w-[18rem]">
            <Typography
              dataTestId="videos-slider-title-right"
              text="Start exploring the world of AI now at our channel"
              typo="h4"
              font="roboto"
              className="text-xs font-light sm:text-base md:text-lg"
            />
          </div>
        </div>
        {/* Sub section II: Videos slider */}
        <div className="custom-container">
          {/* @ts-expect-error Async Server Component */}
          <VideosSlider />
        </div>
      </div>
      {/* Forth section - image break */}
      <div
        data-test-id="image-brak-foundation"
        className="flex h-[100svh] w-auto flex-col py-12 dark:bg-brandBg"
      >
        <div
          data-test-id="video-slider-image-display"
          className="relative h-full w-full opacity-20"
        >
          <Image src="/img.png" alt="display image" fill={true} />
        </div>
      </div>

      {/* Fifth section - about us */}
      <div
        data-test-id="about-us-foundation"
        className="custom-container flex h-[100svh] w-auto flex-col py-12 dark:bg-brandBg"
      ></div>
    </>
  )
}
export default HomePage
