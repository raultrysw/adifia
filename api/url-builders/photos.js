import URL from './URL'

export const linkForPhotos = () => {
  let url = new URL('/photos')
  return url.href
}
