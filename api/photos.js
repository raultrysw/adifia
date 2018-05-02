// import { key as cacheKey } from '~/plugins/persistence'
import * as articleURLS from './url-builders/photos'
import Photo from '~/prototypes/photo.js'

export function recoverAllPhotos () {
  debugger //eslint-disable-line

  const url = articleURLS.linkForPhotos()
  this.makeRequest({ url }, 'get', ({ photos }) => {
    let photosRecovered = photos.map(photo => new Photo(photo))
    this.submitPhotos(photosRecovered)
  }, () => {})
}
export function createPhoto () {
  let url = '/photos'
  this.makeRequest(
    { url, data: this.data },
    'post',
    ({ photoCreated }) => {
      this.submitPhoto(new Photo(photoCreated))
      this.$router.push('/admin/photos/' + photoCreated._id)
    },
    error => {
      console.log(error)
    }
  )
}
export function removePhoto () {
  if (this.confirmation !== this.userConfirmation) return
  this.makeRequest({ url: this.photoUrl }, 'delete', () => {
    this.$router.push('/admin/photos')
  }, data => {
    console.log(data)
  })
}
