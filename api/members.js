export function signIn () {
  let url = '/members/login'
  let data = this.user
  this.makeRequest({url, data}, 'post', ({ user }) => {
    this.errors = []
    this.$store.commit('logIn', user)
    this.$router.push('/')
  }, ({ response }) => {
    this.errors = []
    setTimeout(() => {
      this.errors = response.data.items.errors
    }, 75)
  })
}

export function signUp () {
  let url = '/members'
  let data = this.member
  this.makeRequest({ url, data }, 'post', ({ memberCreated }) => {
    console.log('Se ha creado', memberCreated)
    this.$router.push('/')
  }, ({ errors }) => {
    this.errors = []
    setTimeout(() => {
      this.errors = errors
    }, 100)
  }
  )
}
