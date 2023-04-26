import { cn } from '@utils'
import Image from 'next/image'
import { Typography } from '.'

const imageStackTwClass = {
  container: `flex flex-col gap-[1rem] items-center md:flex-row md:gap-[3rem] w-auto h-full`,
  itemContainer: `flex flex-col w-[8rem] h-[8rem] sm:w-[10rem] sm:h-[10rem] md:w-full md:h-[12rem] sm:gap-2 lg:gap-4`,
  item: `rounded-lg`,
}

function ImageStack(props: ImageStack) {
  const { images, dataTestId, className } = props
  return (
    <div
      data-test-id={dataTestId}
      className={cn(imageStackTwClass.container, className)}
    >
      {images.map((image, index) => (
        <div
          key={`${image.dataTestId}-${index}`}
          data-test-id={image.dataTestId}
          className={cn(
            imageStackTwClass.itemContainer,
            image.containerClassName
          )}
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
            text="Chat GPT"
            font="righteous"
            typo="clean"
            className="text-base sm:text-xl md:text-2xl lg:text-4xl text-center"
          />
        </div>
      ))}
    </div>
  )
}
export default ImageStack

interface ImageStack {
  images: {
    src: string
    alt: string
    dataTestId: string
    containerClassName?: string
    className?: string
  }[]
  dataTestId: string
  className?: string
}
