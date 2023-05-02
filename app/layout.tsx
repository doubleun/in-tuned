import '@styles/globals.css'
import { NextResponse } from 'next/server'
import { cookies } from 'next/headers'
import { roboto as font } from '@fonts'
import clsx from 'clsx'
import Image from 'next/image'
import { Header } from '@components/compound'
import { Logo } from '@components/base'

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'In-tuned',
  description:
    'Welcome to in-tuned! Where we explore the world of AI technologies',
  abstract:
    'Website for YouTube channel in-tuned, where we explore the exciting world of AI',
  applicationName: 'in-tuned',
  authors: [
    { name: 'Ratchaya Songkeaw', url: 'https://www.instagram.com/poyja__' },
    {
      name: 'Wachirachai Nitsomboon',
      url: 'https://www.linkedin.com/in/wachirachai-nitsomboon-b835b9210',
    },
  ],
  category: 'technology',
  creator: 'in-tuned',
  colorScheme: 'dark light',
  keywords: [
    'in-tuned',
    'intuned',
    'In-tuned',
    'InTuned',
    'Intuned',
    'in tuned',
    'Wachirachai',
    'Nitsomboon',
    'Ratchaya',
    'Songkeaw',
  ],
  robots: {
    index: false,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  other: {
    'google-site-verification': 'QWSQRGGC5eCa--5CBH1abEHnq8TD1vbqsfe3zyniS_k',
  },
}

const helperTwClass = {
  debugBreakpointColor:
    'bg-black md:bg-slate-600 lg:bg-fuchsia-700 xl:bg-rose-700',
}

const rootLayoutTwClass = {
  // bgWrap: 'fixed h-full w-full overflow-hidden z-[-1]',
  // bgWrap: 'absolute inset-0 h-[100svh] w-full overflow-visible z-[-1] bg-black',
  bgWrap:
    'absolute inset-0 h-[100svh] w-full z-[-1] bg-black overflow-x-hidden',
  homePageParent:
    'relative bg-gradient-to-b from-blue-50 to-blue-400 dark:bg-none dark:from dark:bg-transparent h-fit w-auto',
  charContainer:
    'absolute w-24 h-36 right-[-6%] top-[46%] translate-y-[-60%] sm:w-32 sm:h-48 sm:right-[10%] md:w-40 md:h-60 md:top-[48%] lg:w-44 lg:h-64 lg:right-[12%] xl:right-[20%]',
  charAnimation:
    'animate-bounce duration-6000 ease-in-out top-[34%] md:top-[32%] lg:top-[30%]',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  //TODO: Handle dark mode with cookies
  // let response = NextResponse.next()
  // const cookieStore = cookies()
  // const currentTheme = cookieStore.get('theme')?.value

  // if (!currentTheme) response.cookies.set('theme', 'light')

  return (
    <html
      lang="en"
      // default dark theme
      className={clsx([font.className, 'dark'], {
        // ['dark']: currentTheme === 'dark'
      })}
    >
      <body className="relative h-fit dark:bg-brandBg">
        {/* Header */}
        <div
          data-test-id="main-header-nav"
          className="bg-custom-container sticky top-0 z-50"
        >
          <Header logo={<Logo text="In-tuned" />} />
        </div>

        {/* home page background */}
        <div className={rootLayoutTwClass.bgWrap}>
          <Image
            src={'/bg.png'}
            alt="bg"
            priority
            fill={true}
            className="object-cover object-center opacity-50"
          />
          {/* character home page background */}
          <div
            className={clsx([
              rootLayoutTwClass.charContainer,
              rootLayoutTwClass.charAnimation,
            ])}
          >
            <Image
              src={'/char_bg.png'}
              alt="char"
              sizes="100px"
              loading="lazy"
              fill={true}
            />
          </div>
        </div>
        <div className={rootLayoutTwClass.homePageParent}>{children}</div>
      </body>
    </html>
  )
}
