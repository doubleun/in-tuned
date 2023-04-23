import { cn } from '@utils'
import { ReactNode } from 'react'
import Typography from './Typography'
import Image from 'next/image'

const CardTwClass = {
  container: ``,
  image: `relative w-44 h-36 md:w-56 md:h-48`,
}

// NOTE: Create variant if needed
function Card(props: CardProps) {
  const { dataTestId, image, title, subtitle, className } = props

  return (
    <div
      data-test-id={`${dataTestId}-card-container`}
      className={cn(CardTwClass.container, className)}
    >
      <div
        data-test-id={`${dataTestId}-card-image`}
        className={CardTwClass.image}
      >
        {image && image}
      </div>
      <div data-test-id={`${dataTestId}-card-title`}>{title && title}</div>
      <div data-test-id={`${dataTestId}-card-subtitle`}>
        {subtitle && subtitle}
      </div>
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
}
