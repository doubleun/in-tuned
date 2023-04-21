// import Image from 'next/image'

import Typography from '@components/base/Typography'
import Header from '@components/compound/Header'

function HomePage() {
  return (
    <div className="grid grid-rows-3 h-full w-auto">
      <Header
        logo={<Header.Logo text="In-tuned" />}
        toggleTheme={<Header.ToggleTheme />}
      />

      <div
        data-test-id="welcome-text-heading-container"
        className="flex flex-col w-[18rem] sm:w-[26rem] md:w-[32rem] lg:w-[38rem]"
      >
        <Typography text="Hey there!" typo="h1" font="righteous" size="d-lg" />
        <Typography
          text="Welcome to In-tuned,"
          typo="h1"
          font="righteous"
          size="d-lg"
        />

        <div data-test-id="welcome-text-description-container" className="mt-2">
          <Typography
            text="We are passionate about AI and its potential to transform our world. Stay ahead of the curve and be in-tuned with the future of technology."
            typo="lead"
            font="inter"
            size="d-md"
          />
        </div>
      </div>
    </div>
  )
}
export default HomePage
