import type { Metadata } from 'next'

const metadata: Metadata = {
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
}

export default metadata
