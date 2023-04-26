'use client'
import { Card } from '@components/base'
import { getYoutubeVideos } from '@service/youtube'

const videosSliderTwClass = {
  container: `flex gap-4 videos-slider overflow-x-scroll h-fit`,
  item: `cursor-pointer transition-all duration-150 hover:bg-blue-950/30 p-2 rounded-md`,
}

async function VideosSlider() {
  const vids = (await getYoutubeVideos()).items
  // console.log('vids: ', vids)

  const handleToggleScrollbar = () => {
    // TODO: handle hide/show scrollbar on scroll. Also remove -> .videos-slider::-webkit-scrollbar
  }

  return (
    <div
      data-test-id="videos-slider-items-container"
      className={videosSliderTwClass.container}
      onScroll={handleToggleScrollbar}
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
          title={
            <Card.Title
              dataTestId={`video-item-${index}`}
              text={item.snippet.title}
              typo="p"
              className="text-xs sm:text-sm"
            />
          }
          className={videosSliderTwClass.item}
        />
      ))}
    </div>
  )
}
export default VideosSlider
