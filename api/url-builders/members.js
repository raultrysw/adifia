import URL from './URL'

export const membersURL = () => {
  let link = new URL('/members')
  return link.href
}

export const member = (id) => {
  let link = new URL('/members/:id')
  link.setParam('id', id)
  return link.href
}

export const signInUrl = () => {
  let link = new URL('/members/login')
  return link.href
}
