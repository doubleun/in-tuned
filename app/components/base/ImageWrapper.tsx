import { cn } from '@utils'
import { ReactNode } from 'react'

function ImageWrapper({ image, className }: ImageWrapperProps) {
  return (
    // sizing with max-height and max-width
    <div
      className={cn(
        'relative h-[1000px] max-h-[24rem] w-[1000px] max-w-[16rem] sm:max-h-[28rem] sm:max-w-xs',
        className
      )}
    >
      {image}
    </div>
  )
}
export default ImageWrapper

interface ImageWrapperProps {
  image: ReactNode
  className?: string
}
