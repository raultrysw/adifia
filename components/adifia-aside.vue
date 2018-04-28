<template>
  <aside class="app__aside">
    <div class="app__title-box">
      <adifia-logo />
      <h1 class="app__title-web"><nuxt-link to="/">AdifiA</nuxt-link></h1>
    </div>
    <navigator />
    <div>
      <userbox v-if="loggedIn" />
      <form-login v-else />
    </div>
  </aside>
</template>

<script>
import FormLogin from '~/components/form-login.vue'
import navigator from '~/components/navigator.vue'
import userbox from '~/components/userbox.vue'
import AdifiaLogo from '~/components/adifia-logo.vue'

import {mapActions, mapState, mapMutations, mapGetters} from 'vuex'

export default {
  components: {navigator, userbox, FormLogin, AdifiaLogo},
  mounted () {
    this.sessionRestoring()
  },
  computed: {
    ...mapState(['loggedIn']),
    ...mapGetters(['isAdmin'])
  },
  methods: {
    ...mapActions(['sessionRestoring']),
    ...mapMutations(['logOut'])
  }
}
</script>

