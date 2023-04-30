import { Typography } from '@components/base'
import CountNumber from '@components/base/CountNumber'
import { getMostViewedVideos } from '@service'

async function EndHomeSection() {
  const videos = (await getMostViewedVideos({ useMock: true })).items

  const topVideos = []

  return (
    <div className="grid h-full w-full">
      <CountNumber
        dataTestId="count-subscribers"
        from={0}
        to={150}
        className="mx-auto h-fit w-fit self-center text-9xl font-bold sm:text-[25rem]"
      />
      <div>
        <Typography text="ASd" dataTestId="" />
      </div>
    </div>
  )
}
export default EndHomeSection
