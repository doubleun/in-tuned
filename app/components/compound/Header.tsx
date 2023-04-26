'use client'

import { ReactNode } from 'react'
import { Logo } from '@components/base'
import HeaderMenu from '@components/compound/HeaderMenu'
import { useScrollPosition } from '@hooks'
import { cn } from '@utils'

interface HeaderComponent {
  logo?: ReactNode
}

const stylesTwClass = {
  header:
    // 'sticky w-full h-16 border-b border-b-slate-200 bg-white dark:border-b-slate-700 dark:bg-slate-900',
    'sticky w-full h-16 border-b border-b-slate-200 bg-white dark:border-0 dark:bg-transparent dark:transition-colors dark:duration-700',
  headerScrolled: `transition-colors dark:bg-brandNavBg duration-1000`,
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

// colors
// lightPrimary: #f8e1bc
// primary: #f3b756
// darkPrimary: #9d7340

// bg: #101219
// darkBg: #000000
