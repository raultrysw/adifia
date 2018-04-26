<template>
  <div class="app">
    <header class="app__header">
      <h2>{{currentTitle}}</h2>
    </header>
    <aside class="app__aside">
      <h1 class="app__title-web"><nuxt-link to="/">AdifiA</nuxt-link></h1>
      <ul class="app__navigator no-list">
        <li><nuxt-link to="/articles">Blog</nuxt-link></li>
        <li><nuxt-link to="/events">Eventos</nuxt-link></li>
      </ul>
      <div>
        <template v-if="loggedIn">
          <p><button @click="logOut" v-if="loggedIn">Logout</button></p>
          <p><nuxt-link v-if="isAdmin" to="/admin/">Ir al area de administración</nuxt-link></p>
        </template>
        <p v-else><nuxt-link to="/login">Entra</nuxt-link> o <nuxt-link to="/signup">registrate</nuxt-link></p>
      </div>
    </aside>
    <main is="nuxt" class="app__main"></main>
  </div>
</template>

<script>
import {mapActions, mapState, mapMutations, mapGetters} from 'vuex'
export default {
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

<style>
</style>
