<template>
  <div class="app">
    <header class="app__header">
      <h2 class="app__title-page">{{currentTitle}}</h2>
    </header>
    <adifia-aside />
    <main is="nuxt" class="app__main"></main>
  </div>
</template>

<script>
import adifiaAside from '~/components/adifia-aside.vue'
import {mapActions, mapState, mapMutations, mapGetters} from 'vuex'
export default {
  components: {adifiaAside},
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
