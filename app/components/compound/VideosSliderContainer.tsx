import { VideoSlider } from '@components/base'
import { getYoutubeVideos } from '@service/youtube'

async function VideosSliderContainer() {
  const videos = (await getYoutubeVideos()).items
  // console.log('vids: ', vids)

  return <VideoSlider videos={videos} />
}
export default VideosSliderContainer
