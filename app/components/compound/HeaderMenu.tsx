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
import { Menu, Youtube } from 'lucide-react'
import MobileMenu from '@components/base/MobileMenu'

function HeaderMenu() {
  return (
    <NavigationMenu>
      <NavigationMenuList className="hidden md:flex gap-1">
        <NavigationMenuItem>
          <NavigationMenuLink className={navigationMenuTriggerStyle()}>
            <ToggleTheme />
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Show case
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Contact Us
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="https://www.youtube.com/@In-tuned" target="_blank">
            <div
              className={
                'inline-flex items-center justify-center rounded-md focus:outline-none focus:bg-slate-100 border-solid border-2 border-slate-100 hover:bg-black/5 dark:hover:bg-black/10 focus:bg-black/30 transition ease-in-out delay-150 hover:scale-110 duration-300 gap-1 py-2 px-2 h-10 w-max'
              }
            >
              <Youtube /> Our chanel
            </div>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
      <MobileMenu />
    </NavigationMenu>
  )
}

export default HeaderMenu
