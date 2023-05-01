import Link from 'next/link'
import { cn } from '@utils'
import * as icons from 'lucide-react'

const glowIconTwClass = {
  iconHover: `absolute -inset-1 animate-pulse rounded-xl bg-transparent blur-[6px] group-hover:bg-blue-600`,
}

function GlowIcon({
  icon,
  link,
  size,
  iconClassName,
  hoverClassName,
}: {
  icon: keyof typeof icons
  size: number
  link?: string
  iconClassName?: string
  hoverClassName?: string
}) {
  const LucideIcon = icons[icon] as icons.LucideIcon

  const renderIcon = () => {
    const iconComponent = (
      <LucideIcon size={size} className={cn('relative z-[2]', iconClassName)} />
    )
    if (link)
      return (
        <Link href={link} target="_blank">
          {iconComponent}
        </Link>
      )
    else return iconComponent
  }

  return (
    <div data-test-id="glow-icon-relative-container" className="group relative">
      {renderIcon()}
      <div
        data-test-id="glow-icon-absolute-container"
        className={cn(glowIconTwClass.iconHover, hoverClassName)}
      ></div>
    </div>
  )
}

export default GlowIcon
