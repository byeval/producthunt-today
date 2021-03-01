export const fileCdn = 'media.oneshoot.me'

export function mirrorImage(str?: string, query?: { [key: string]: string }) {
  if (!str) return

  const url = str
    .replace('ph-files.imgix.net', process.env.REMAX_APP_FILECDN)
    .replace('ph-avatars.imgix.net', process.env.REMAX_APP_AVATARCDN)

  if (!query) return url

  const search = Object.keys(query || {})
    .map((key) => `${key}=${query[key]}`)
    .join('&')

  return `${url.split('?')[0]}?${search}`
}
