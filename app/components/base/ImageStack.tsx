'use client'

import { cn } from '@utils'
import Image from 'next/image'
import { Typography } from '.'
import { useIntersectionObserver } from '@hooks'
import clsx from 'clsx'

const imageStackTwClass = {
  container: `flex flex-col gap-[1rem] items-center md:flex-row md:gap-[3rem] w-auto h-full`,
  itemContainer: `flex flex-col w-[8rem] h-[8rem] sm:w-[10rem] sm:h-[10rem] md:w-full md:h-[12rem] sm:gap-2 lg:gap-4`,
  item: `rounded-lg`,
  animateShow: `opacity-100 transition-all blur-none duration-1000 filter-none translate-x-0`,
  animateHide: `opacity-0 transition-all blur duration-500 delay-0 filter -translate-x-[200%] motion-reduce:transition-none`,
}
// animateHide tips: use `motion-safe:transition-none` for hiding instantly to reduce excessive motions

function ImageStack(props: ImageStack) {
  const { images, dataTestId, className } = props
  const [containerRef, isVisible] = useIntersectionObserver<HTMLDivElement>({
    root: null,
    rootMargin: '0px',
    threshold: 0.5,
  })
  const initDelay = 200
  return (
    <div ref={containerRef}>
      <div
        data-test-id={dataTestId}
        className={cn(imageStackTwClass.container, className)}
      >
        {images.map((image, index) => (
          <div
            key={`${image.dataTestId}-${index}`}
            data-test-id={image.dataTestId}
            className={clsx(
              imageStackTwClass.itemContainer,
              image.containerClassName,
              {
                [imageStackTwClass.animateShow]: isVisible,
                [imageStackTwClass.animateHide]: !isVisible,
              }
            )}
            style={{
              transitionDelay: `${isVisible ? initDelay * index : 0}ms`,
            }}
          >
            <div className="relative h-full w-full">
              <Image
                src={image.src}
                alt={image.alt}
                fill={true}
                className={cn(imageStackTwClass.item, image.className)}
              />
            </div>
            <Typography
              dataTestId="welcome-title-text-bottom"
              text={image.text ?? ''}
              font="inter"
              typo="clean"
              className="text-center text-base sm:text-xl md:text-2xl lg:text-4xl"
            />
          </div>
        ))}
      </div>
    </div>
  )
}
export default ImageStack

interface ImageStack {
  images: {
    src: string
    alt: string
    dataTestId: string
    text?: string
    containerClassName?: string
    className?: string
  }[]
  dataTestId: string
  className?: string
}
