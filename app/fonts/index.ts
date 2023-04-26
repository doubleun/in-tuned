import { Inter, Righteous, Roboto, Source_Serif_Pro } from 'next/font/google'

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

export const serif = Source_Serif_Pro({
  weight: ['200', '300', '400', '600', '700'],
  style: ['normal'],
  subsets: ['latin'],
  variable: '--serif-font',
})
