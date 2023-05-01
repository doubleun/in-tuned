'use client'

import * as React from 'react'
import { HeaderMenuList, MobileMenu } from '@components/base'

function HeaderMenu() {
  return (
    <>
      <div
        className="hidden md:flex"
        data-test-id="header-navigation-menu-container"
      >
        <HeaderMenuList />
      </div>
      <MobileMenu />
    </>
  )
}

export default HeaderMenu
