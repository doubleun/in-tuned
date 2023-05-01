import Image from 'next/image'

import { Card, ImageStack, Typography } from '@components/base'
import {
  FooterComponent,
  SubCountSection,
  VideosSliderContainer,
} from '@components/compound'
import SimpleParallax from '@components/base/SimpleParallax'
import ImageWrapper from '@components/base/ImageWrapper'
import MarqueeText from '@components/base/MarqueeText'

function HomePage() {
  return (
    <>
      {/* First section - home page */}
      {/* use `h-full-no-nav` instead of `h-[100svh]` cuz we need to subtract the nav height */}
      <section
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
      </section>
      {/* TODO: extract these "section" into a component */}
      {/* Second section - Parallax - sample work */}
      <section
        data-test-id="image-parallax-foundation"
        className="flex h-fit w-auto flex-col gap-20 bg-gradient-to-b from-blue-100 to-blue-300 pb-40 pt-60 dark:bg-none dark:bg-brandBgDark sm:gap-28"
      >
        {/* Sub section I: Title */}
        <Typography
          weight="bold"
          dataTestId="image-parallax-title"
          text="Explore the world of AI"
          typo="h1"
          size="d-lg"
          className="m-auto"
          font="righteous"
        />
        {/* Sub section II: Parallax images */}
        <div
          data-test-id="image-parallax-container"
          className="container m-auto flex h-full w-full flex-col gap-28 sm:gap-24 xl:px-32"
        >
          {/* Refactor this into a list instead */}
          <SimpleParallax
            dataTestId="image-parallax-show-case-1"
            mainComponent={
              <ImageWrapper
                image={
                  <Image
                    src="/images/sample/sample1.png"
                    alt="sample1"
                    fill={true}
                  />
                }
              />
            }
            offsetComponent={
              <Card
                dataTestId="show-case-prompt-1"
                title={
                  <Typography
                    dataTestId="show-case-prompt-1-typo"
                    text='"Hypnotic pattern in the sea, ship, surrealism, top view from afar, black and white photography, ultra details, 8k --v 5 --ar 2:3"'
                    typo="code"
                    size="xs"
                    style="italic"
                    className="bg-slate-50/30 text-slate-900 backdrop-blur-sm dark:bg-slate-800/10 dark:text-slate-300 dark:backdrop-blur-md"
                  />
                }
                className="w-full"
              />
            }
            parallaxSettings={[0, 1, 460, 0]}
            align="left"
          />
          <SimpleParallax
            dataTestId="image-parallax-show-case-2"
            mainComponent={
              <ImageWrapper
                image={
                  <Image
                    src="/images/sample/sample2.png"
                    alt="sample2"
                    fill={true}
                  />
                }
                className="max-h-[12rem] max-w-[20rem] sm:max-h-[20rem] sm:max-w-lg md:max-w-xl"
              />
            }
            offsetComponent={
              <Card
                dataTestId="show-case-prompt-2"
                title={
                  <Typography
                    dataTestId="show-case-prompt-2-typo"
                    text="Kyoto, Japan ::paranoma :: realistic :: perfect details :: cinematic light --v 5 --ar 16:9"
                    typo="code"
                    size="xs"
                    style="italic"
                    className="bg-slate-50/30 text-slate-900 backdrop-blur-sm dark:bg-slate-800/10 dark:text-slate-300 dark:backdrop-blur-md"
                  />
                }
                className="w-2/3 sm:w-3/4"
              />
            }
            parallaxSettings={[0, 1, 320, 0]}
            align="right"
          />
          <SimpleParallax
            dataTestId="image-parallax-show-case-3"
            mainComponent={
              <ImageWrapper
                image={
                  <Image
                    src="/images/sample/sample3.png"
                    alt="sample3"
                    fill={true}
                  />
                }
              />
            }
            offsetComponent={
              <Card
                dataTestId="show-case-prompt-3"
                title={
                  <Typography
                    dataTestId="show-case-prompt-3-typo"
                    text="Portrait of a middle age Man wearing a black hoodie with shorts on a sidewalk of a city street :: Night, Urban :: Bokeh, DOF, Hasselblad XPAN --ar 2:3 --v 5"
                    typo="code"
                    size="xs"
                    style="italic"
                    className="bg-slate-50/30 text-slate-900 backdrop-blur-sm dark:bg-slate-800/10 dark:text-slate-300 dark:backdrop-blur-md"
                  />
                }
                className="w-full"
              />
            }
            parallaxSettings={[0, 1, 460, 0]}
            align="left"
          />
          <SimpleParallax
            dataTestId="image-parallax-show-case-4"
            mainComponent={
              <ImageWrapper
                image={
                  <Image
                    src="/images/sample/sample4.png"
                    alt="sample4"
                    fill={true}
                  />
                }
                className="max-h-[18rem] max-w-[18rem] opacity-80 sm:max-h-[24rem] sm:max-w-sm"
              />
            }
            offsetComponent={
              <Card
                dataTestId="show-case-prompt-4"
                title={
                  <Typography
                    dataTestId="show-case-prompt-4-typo"
                    text="Siberian play with cute kid --v 5"
                    typo="code"
                    size="xs"
                    style="italic"
                    className="bg-slate-50/30 text-slate-900 backdrop-blur-sm dark:bg-slate-800/10 dark:text-slate-300 dark:backdrop-blur-md"
                  />
                }
                className="w-fit"
              />
            }
            parallaxSettings={[0, 1, 460, 0]}
            align="right"
          />
        </div>
      </section>
      {/* Third section - tools */}
      <section
        data-test-id="tools-foundation"
        className="custom-container flex h-[100svh] bg-gradient-to-b from-blue-300 via-blue-200 to-slate-100 w-auto flex-col justify-center gap-6 dark:bg-none dark:bg-brandBg md:py-12"
      >
        <Typography
          dataTestId="tools-title"
          text="What we use"
          typo="h3"
          font="righteous"
          className="text-lg font-light sm:text-2xl md:text-3xl"
        />
        <div data-test-id="tools-image-stack-container">
          {/* TODO: use framer motion instead */}
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
      </section>
      {/* Forth section - video carousel */}
      <section
        data-test-id="videos-slider-foundation"
        className="flex h-[100svh] w-auto flex-col bg-slate-100 justify-center gap-6 pt-12 dark:bg-none dark:bg-brandBg sm:gap-14"
      >
        {/* Sub section I: Text */}
        <div
          data-test-id="videos-slider-title-container"
          className="custom-container flex flex-col justify-between sm:flex-row"
        >
          <div className="flex items-center gap-4">
            <div>
              <Typography
                dataTestId="videos-slider-title-left"
                text="Watch us on "
                typo="h3"
                font="righteous"
                className="text-lg font-light sm:text-2xl md:text-3xl"
              />
            </div>
            <div className="relative h-10 w-10">
              <Image src="/icons/yt.svg" alt="Some of our work" fill={true} />
            </div>
          </div>
          <div className="sm:w-[18rem]">
            <Typography
              dataTestId="videos-slider-title-right"
              text="Start exploring the world of AI now at our channel"
              typo="h4"
              font="inter"
              className="text-xs font-light sm:text-base md:text-lg"
            />
          </div>
        </div>
        {/* Sub section II: Videos slider */}
        <div className="custom-container">
          {/* @ts-expect-error Async Server Component */}
          <VideosSliderContainer />
        </div>
      </section>
      {/* Fifth section - sub count section  */}
      <section
        data-test-id="end-home-section-foundation"
        className="h-full-no-nav flex flex-col bg-white dark:bg-brandBgDark"
      >
        <MarqueeText />
        <div className="custom-container flex-1">
          {/* @ts-expect-error Async Server Component */}
          <SubCountSection />
        </div>
        {/* Footer */}
        <footer
          data-test-id="home-page-footer-foundation"
          className="flex h-fit w-full bg-slate-100 dark:bg-slate-900"
        >
          <FooterComponent />
        </footer>
      </section>
    </>
  )
}
export default HomePage
