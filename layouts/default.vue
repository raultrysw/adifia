<template>
  <div>
    <h1><nuxt-link to="/">AdifiA</nuxt-link></h1>
    <div>
      <template v-if="loggedIn">
        <p><button @click="logOut" v-if="loggedIn">Logout</button></p>
        <p><nuxt-link v-if="isAdmin" to="/admin/">Ir al area de administración</nuxt-link></p>
      </template>
      <p v-else><nuxt-link to="/login">Entra</nuxt-link> o <nuxt-link to="/signup">registrate</nuxt-link></p>
    </div>
    <nuxt/>
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
