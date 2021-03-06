import * as membersURLS from './url-builders/members'

export function recoverAllMembers (cb) {
  let url = membersURLS.membersURL()
  this.makeRequest({url}, 'get',
    ({members}) => {
      this.submitMembers(members)
      if (typeof cb === 'function') cb()
    }, (errorResponse) => {

    }
  )
}

export function postMember () {
  let url = membersURLS.membersURL()
  const {token} = this
  this.makeRequest({url, data: this.member, token}, 'post',
    ({memberCreated}) => {
      console.log('Se ha creado', memberCreated)
      this.addMember(memberCreated)
      this.$router.push('/admin/members/' + memberCreated._id)
    }, ({errors}) => {
      this.errors = []
      setTimeout(() => {
        this.errors = errors
      }, 100)
    }
  )
}

export function putRolToMember (data, id) {
  let url = membersURLS.member(id)
  const oldRol = this.getMember()(id).pvLvl
  console.log('oldrol', oldRol)
  this.makeRequest({url, data, config: this.config}, 'put',
    ({member}) => {
      this.pvLvl = data.pvLvl
    }, (errors) => {
      this.pvLvl = oldRol
    }
  )
}

export function putMember () {
  let url = membersURLS.member(this.$route.params.id)
  this.makeRequest({url, data: this.member}, 'put',
    ({member}) => {
      this.$router.push('/admin/members/' + member._id)
    }, (error) => {
      console.log(error)
    }
  )
}

export function deleteMember () {
  if (this.anwser !== this.confirmation) return

  this.makeRequest({url: membersURLS.member(this.$route.params.id)}, 'delete',
    () => {
      this.deleteMember(this.$route.params.id)
      this.$router.push('/admin/members')
    }, (data) => {
      console.log(data)
    }
  )
}

export function signIn () {
  let url = membersURLS.signInUrl()
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
  let url = membersURLS.membersURL()
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
