// 'use client'
import { Card } from '@components/base'
import { getYoutubeVideos } from '@service/youtube'

const videosSliderTwClass = {
  container: `flex gap-2 overflow-x-auto h-fit`,
  item: `w-64 h-auto`,
}

async function VideosSlider() {
  const vids = (await getYoutubeVideos()).items
  // console.log('vids: ', vids)

  return (
    <div
      data-test-id="videos-slider-items-container"
      className={videosSliderTwClass.container}
    >
      {vids.map((item, index) => (
        <Card
          key={item.id}
          dataTestId={`video-item-${index}`}
          image={
            <Card.Image
              src={item.snippet.thumbnails.high.url}
              alt={item.snippet.title}
              fill={true}
            />
          }
        />
      ))}
    </div>
  )
}
export default VideosSlider
