
import {userTokenKey} from '~/settings'
import {key as cacheKey} from '~/plugins/persistence'
import {mapGetters, mapState} from 'vuex'

let {stringify} = require('querystring')

export default {
  computed: {
    ...mapGetters(['token', 'isAdmin', 'isVocal']),
    ...mapState(['loggedIn']),
    configAuthed () {
      return {
        headers: {
          [userTokenKey]: this.$store.state[cacheKey].token
        }
      }
    },
    authQueried () {
      let config = this.configAuthed
      let authConfig = {token: config.headers[userTokenKey]}
      return stringify(authConfig)
    }
  }
}
