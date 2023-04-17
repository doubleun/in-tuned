'use client'

import * as React from 'react'
import Link from 'next/link'

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from '@components/ui/navigation-menu'

import ToggleTheme from '../base/ToggleTheme'
import { Youtube } from 'lucide-react'
import MobileMenu from '@components/base/MobileMenu'

interface HeaderMenuListProps {
  direction?: 'col' | 'row'
  showToggleLabel?: boolean
  className?: string | undefined
}

function HeaderMenuList({
  direction = 'row',
  showToggleLabel,
  className,
}: HeaderMenuListProps) {
  return (
    <NavigationMenu className={className} data-test-id="header-navigation-menu">
      <NavigationMenuList
        className={`flex-${direction} gap-1`}
        data-test-id="header-navigation-list"
      >
        <NavigationMenuItem data-test-id="header-navigation-item-toggle-theme">
          <ToggleTheme
            className={navigationMenuTriggerStyle()}
            showLabel={showToggleLabel}
          />
        </NavigationMenuItem>
        <NavigationMenuItem data-test-id="header-navigation-item-showcase">
          <Link href="/" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Show case
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem data-test-id="header-navigation-item-contact">
          <Link href="/" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Contact Us
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem data-test-id="header-navigation-item-youtube">
          <Link href="https://www.youtube.com/@In-tuned" target="_blank">
            <div
              className={
                'inline-flex items-center justify-center rounded-md focus:outline-none focus:bg-slate-100 border-solid border-2 border-slate-900 dark:border-slate-100 hover:bg-black/5 dark:hover:bg-black/10 focus:bg-black/30 transition ease-in-out delay-150 hover:scale-110 duration-300 gap-1 py-2 px-2 h-10 w-max'
              }
            >
              <Youtube /> Our chanel
            </div>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

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
HeaderMenu.HeaderMenuList = HeaderMenuList
