export default function Photo ({likes, title, description, location, _id}) {
  this.likes = likes
  this.title = title
  this.description = description
  this.location = location
  this._id = _id
  this.href = '/img/photos/' + _id + '.jpg'
}
