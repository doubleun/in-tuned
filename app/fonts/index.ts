import { Inter, Righteous, Roboto } from 'next/font/google'

export const righteous = Righteous({
  weight: ['400'],
  style: ['normal'],
  subsets: ['latin'],
})

export const roboto = Roboto({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  variable: '--roboto-font',
})

export const inter = Inter({
  weight: ['400', '700'],
  style: ['normal'],
  subsets: ['latin'],
  variable: '--inter-font',
})
