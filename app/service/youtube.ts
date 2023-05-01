import youtubeVidsMockData from './youtubeVidsMockData.json'
import ytMostViewedMockData from './ytMostViewedMockData.json'
import ytChannelMockData from './ytChannelMockData.json'

type YouTubeAPIProps = { useMock?: boolean }

export const getFeaturedVideos = async (
  props?: YouTubeAPIProps
): Promise<YouTubeVideosList> => {
  const { useMock = false } = props ?? {}
  //TODO: maybe consider oauth implementation
  // const auth = await getGoogleAPIAccessToken()
  // console.log(auth)
  // return

  const apiKey = process.env.NEXT_PUBLIC_YOUTUBE_PUBLIC_API_KEY
  const youtubePlaylistId = process.env.NEXT_PUBLIC_VIDEOS_PLAYLIST_ID
  if (!apiKey || !youtubePlaylistId)
    throw new Error(
      'Youtube API key or Playlist ID are not set in the environment'
    )

  const url = `https://youtube.googleapis.com/youtube/v3/playlistItems?part=contentDetails%2Csnippet&maxResults=10&playlistId=${youtubePlaylistId}&key=${apiKey}`

  if (useMock) {
    return new Promise((resolve, reject) => {
      resolve(youtubeVidsMockData)
    })
  } else {
    return fetch(url, {
      // revalidate every 3 hrs (180 mins)
      next: { revalidate: 180 },
    }).then((data) => data.json())
  }
}

export const getMostViewedVideos = async (
  props?: YouTubeAPIProps
): Promise<
  Omit<YouTubeVideosList, 'items'> & {
    regionCode: string
    items: YouTubeMostViewedVideoItem[]
  }
> => {
  const { useMock = false } = props ?? {}
  const apiKey = process.env.NEXT_PUBLIC_YOUTUBE_PUBLIC_API_KEY
  const url = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UC-OVsNxkA794DuquaAWpAGg&maxResults=5&order=viewCount&key=${apiKey}`

  if (useMock) {
    return new Promise((resolve, reject) => {
      resolve(ytMostViewedMockData)
    })
  } else {
    return fetch(url, {
      // revalidate every 3 hrs (180 mins)
      next: { revalidate: 180 },
    }).then((data) => data.json())
  }
}

export const getChannelDetails = async (
  props?: YouTubeAPIProps
): Promise<YouTubeChannelDetails> => {
  const { useMock = false } = props ?? {}
  const apiKey = process.env.NEXT_PUBLIC_YOUTUBE_PUBLIC_API_KEY
  const url = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=UC-OVsNxkA794DuquaAWpAGg&key=${apiKey}`

  if (useMock) {
    return new Promise((resolve, reject) => {
      resolve(ytChannelMockData)
    })
  } else {
    return fetch(url, {
      // revalidate every 3 hrs (180 mins)
      next: { revalidate: 180 },
    }).then((data) => data.json())
  }
}

export interface YouTubeVideosList {
  kind: string
  etag: string
  nextPageToken: string
  items: YouTubeVideoItem[]
  pageInfo: {
    totalResults: number
    resultsPerPage: number
  }
}

export type YouTubeVideoItem = {
  kind: string
  etag: string
  id: string
  snippet: {
    publishedAt: string
    channelId: string
    title: string
    description: string
    thumbnails: {
      [key in YouTubeThumbnailResolutions]: {
        url: string
        width: number
        height: number
      }
    }
    channelTitle: string
    playlistId: string
    position: number
    resourceId: {
      kind: string
      videoId: string
    }
    videoOwnerChannelTitle: string
    videoOwnerChannelId: string
  }
  contentDetails: {
    videoId: string
    videoPublishedAt: string
  }
}

const YouTubeThumbnailResolutions = {
  default: 'default',
  medium: 'medium',
  high: 'high',
  standard: 'standard',
  maxres: 'maxres',
} as const

type YouTubeThumbnailResolutions =
  (typeof YouTubeThumbnailResolutions)[keyof typeof YouTubeThumbnailResolutions]

export interface YouTubeMostViewedVideoItem {
  kind: string
  etag: string
  id: {
    kind: string
    videoId?: string
  }
  snippet: {
    publishedAt: string
    channelId: string
    title: string
    description: string
    thumbnails: {
      [key in Exclude<YouTubeThumbnailResolutions, 'maxres' | 'standard'>]: {
        url: string
        width: number
        height: number
      }
    }
    channelTitle: string
    liveBroadcastContent: string
    publishTime: string
  }
}

export interface YouTubeChannelDetails {
  kind: string
  etag: string
  pageInfo: {
    totalResults: number
    resultsPerPage: number
  }
  items: YouTubeChannelDetailsItem[]
}

export interface YouTubeChannelDetailsItem {
  kind: string
  etag: string
  id: string
  snippet: {
    title: string
    description: string
    customUrl: string
    publishedAt: string
    thumbnails: {
      [key in Exclude<YouTubeThumbnailResolutions, 'maxres' | 'standard'>]: {
        url: string
        width: number
        height: number
      }
    }
    localized: {
      title: string
      description: string
    }
    country: string
  }
  contentDetails: {
    relatedPlaylists: {
      likes: string
      uploads: string
    }
  }
  statistics: {
    viewCount: string
    subscriberCount: string
    hiddenSubscriberCount: boolean
    videoCount: string
  }
}
