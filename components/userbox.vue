<template>
  <div class="app__userbox">
    <div class="app__greeting">
      <h3>Bienvenido {{user.name}} {{user.surname}}</h3>
      <p><button @click="logOut" v-if="loggedIn">Logout</button></p>
    </div>
    <h4>Cosas que puedes hacer</h4>
    <ul class="app__navigator-user no-list">
      <li><nuxt-link to="/profile/">Ver tu perfil</nuxt-link></li>
      <li v-if="isAdmin"><nuxt-link to="/admin/">Ir al area de administración</nuxt-link></li>
    </ul>
  </div>
</template>
<script>
import {mapState, mapMutations, mapGetters} from 'vuex'

export default {
  computed: {
    ...mapState(['loggedIn', 'user']),
    ...mapGetters(['isAdmin'])
  },
  methods: {
    ...mapMutations(['logOut'])
  }
}
</script>
