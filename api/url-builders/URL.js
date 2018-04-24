export default function URL (url, base = '') {
  this.href = base + url + '?'

  this.setParam = (key, value) => {
    this.href = this.href.replace(':' + key, value)
  }

  this.setQuery = (key, value) => {
    let lastChar = this.href[this.href.length - 1]
    if (lastChar === '?') this.href = this.href + key + '=' + value
    else this.href = this.href + '&' + key + '=' + value
  }
}
