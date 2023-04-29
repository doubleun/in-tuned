import youtubeVidsMockData from './youtubeVidsMockData.json'

export const getYoutubeVideos = async (): Promise<YouTubeVideosList> => {
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

  // const url = `https://youtube.googleapis.com/youtube/v3/playlistItems?part=contentDetails%2Csnippet&maxResults=10&playlistId=${youtubePlaylistId}&key=${apiKey}`

  // return fetch(url, {
  //   // revalidate every 3 hrs (180 mins)
  //   next: { revalidate: 180 },
  // }).then((data) => data.json())

  return new Promise((resolve, reject) => {
    resolve(youtubeVidsMockData)
  })
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
