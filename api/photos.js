// import { key as cacheKey } from '~/plugins/persistence'
import * as articleURLS from './url-builders/photos'
import Photo from '~/prototypes/photo.js'

export function recoverAllPhotos () {
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
      console.log('Se ha creado', photoCreated)
      this.$router.push('/admin/photos/' + photoCreated._id)
    },
    error => {
      console.log(error)
    }
  )
}
