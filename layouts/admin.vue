<template>
  <header v-if="show">
      <h1>Bienvenido al area de administración (<nuxt-link to="/">salir</nuxt-link>)</h1>
      <ul v-if="loggedIn">
        <li><nuxt-link to="/admin/members">Miembros</nuxt-link></li>
        <li><nuxt-link to="/admin/events">Eventos</nuxt-link></li>
        <li><nuxt-link to="/admin/articles">Artículos</nuxt-link></li>
        <li><nuxt-link to="/admin/photos">Fotos</nuxt-link></li>
      </ul>
      <main>
        <nuxt v-if="loggedIn" />
        <login-form v-else />
      </main>
    </header>
</template>
<script>
import {mapState, mapActions, mapGetters} from 'vuex'
import loginForm from '~/components/form-login.vue'

export default {
  data () {
    return {
      show: false
    }
  },
  components: {loginForm},
  mounted () {
    this.sessionRestoring()
    if (!this.isAdmin) this.$router.push('/')
    setTimeout(() => { this.show = true }, 100)
  },
  computed: {
    ...mapState(['loggedIn']),
    ...mapGetters(['isAdmin'])
  },
  methods: {
    ...mapActions(['sessionRestoring'])
  }
}
</script>
