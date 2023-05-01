'use client'

import { ReactNode } from 'react'
import { useScrollPosition } from '@hooks'
import { cn } from '@utils'
import HeaderMenu from '@components/compound/HeaderMenu'

interface HeaderComponent {
  logo?: ReactNode
}

const stylesTwClass = {
  header:
    'sticky w-full h-16 bg-white dark:border-0 dark:bg-transparent dark:transition-colors duration-700',
  headerScrolled: `transition-colors bg-transparent backdrop-blur dark:bg-brandNavBg duration-1000`,
  nav: 'flex items-center w-auto h-full justify-between custom-container',
}

function Header({ logo }: HeaderComponent) {
  const scrollPosition = useScrollPosition()

  return (
    <div
      data-test-id="header-nav-container"
      className={cn([stylesTwClass.header], {
        [stylesTwClass.headerScrolled]: scrollPosition > 200,
      })}
    >
      <div data-test-id="header-nav-content" className={stylesTwClass.nav}>
        {logo}
        <div>
          <HeaderMenu />
        </div>
      </div>
    </div>
  )
}

export default Header
