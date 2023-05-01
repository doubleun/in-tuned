import { cn } from '@utils'
import { ReactNode, RefObject } from 'react'
import Typography from './Typography'
import Image from 'next/image'

const CardTwClass = {
  container: `flex flex-col gap-4`,
  image: `relative w-44 h-36 md:w-56 md:h-48`,
}

// NOTE: Create variant if needed
function Card(props: CardProps) {
  const { dataTestId, image, title, subtitle, className, ref } = props

  return (
    <div
      ref={ref}
      data-test-id={`${dataTestId}-card-container`}
      className={cn(CardTwClass.container, className)}
    >
      {image && (
        <div
          data-test-id={`${dataTestId}-card-image`}
          className={CardTwClass.image}
        >
          {image}
        </div>
      )}
      {title && <div data-test-id={`${dataTestId}-card-title`}>{title}</div>}
      {subtitle && (
        <div data-test-id={`${dataTestId}-card-subtitle`}>{subtitle}</div>
      )}
    </div>
  )
}
export default Card
Card.Image = Image
Card.Title = Typography
Card.SubTitle = Typography

interface CardProps {
  dataTestId: string
  image?: ReactNode
  title?: ReactNode
  subtitle?: ReactNode
  className?: string
  ref?: RefObject<HTMLDivElement>
}
