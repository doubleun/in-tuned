import { VideoSlider } from '@components/base'
import { getFeaturedVideos } from '@service/youtube'

async function VideosSliderContainer() {
  const videos = (await getFeaturedVideos({ useMock: false })).items
  // console.log('vids: ', vids)

  return <VideoSlider videos={videos} />
}
export default VideosSliderContainer
