'use client'

import { Card } from '@components/base'
import { useIntersectionObserver } from '@hooks'
import { YouTubeVideoItem } from '@service'
import { cn } from '@utils'

const videosSliderTwClass = {
  container: `flex gap-4 videos-slider overflow-x-scroll h-fit`,
  item: `cursor-pointer transition-all duration-150 hover:bg-blue-950/30 p-2 rounded-md`,
  animateShow: `opacity-100 transition-all blur-none duration-1000 filter-none translate-y-0`,
  animateHide: `opacity-0 transition-all blur duration-500 delay-0 filter translate-y-28 motion-reduce:transition-none`,
}

// TODO: Take care of any
export function VideoSlider({ videos }: { videos: YouTubeVideoItem[] }) {
  const [containerRef, isVisible] = useIntersectionObserver<HTMLDivElement>({
    root: null,
    rootMargin: '100px',
    threshold: 0.5,
  })

  const handleToggleScrollbar = () => {
    // TODO: handle hide/show scrollbar on scroll. Also remove -> .videos-slider::-webkit-scrollbar
  }

  return (
    <div
      ref={containerRef}
      data-test-id="videos-slider-items-container"
      className={cn(videosSliderTwClass.container, {
        [videosSliderTwClass.animateShow]: isVisible,
        [videosSliderTwClass.animateHide]: !isVisible,
      })}
      onScroll={handleToggleScrollbar}
    >
      {videos.map((item: YouTubeVideoItem, index) => (
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
export default VideoSlider
