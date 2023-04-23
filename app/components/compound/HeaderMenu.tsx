'use client'

import * as React from 'react'
import Link from 'next/link'

import { Youtube } from 'lucide-react'
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from '@components/ui/navigation-menu'
import { MobileMenu, ToggleTheme } from '@components/base'

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
                'inline-flex h-10 w-max items-center justify-center gap-1 rounded-md border-2 border-solid border-slate-900 p-2 transition duration-300 delay-150 ease-in-out hover:scale-110 hover:bg-black/5 focus:bg-slate-100 focus:outline-none dark:border-slate-100 dark:hover:bg-black/10 dark:focus:bg-black/30'
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
