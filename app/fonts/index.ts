import { Inter, Righteous, Roboto, Source_Sans_Pro } from 'next/font/google'

export const righteous = Righteous({
  weight: ['400'],
  style: ['normal'],
  subsets: ['latin'],
})

export const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  variable: '--roboto-font',
})

export const inter = Inter({
  weight: ['200', '300', '400', '500', '700'],
  style: ['normal'],
  subsets: ['latin'],
  variable: '--inter-font',
})

export const sansPro = Source_Sans_Pro({
  weight: ['200', '300', '400', '600', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  variable: '--sans-pro-font',
})
