<template>
  <section v-if="show">
    <h2>Entra en AdifiA</h2>
    <login-form />
  </section>
</template>
<script>
import {mapState} from 'vuex'
import loginForm from '~/components/form-login.vue'

export default {
  components: {loginForm},
  data () {
    return {
      show: false
    }
  },
  created () {
    setTimeout(() => {
      if (this.loggedIn) this.$router.push('/')
      else this.show = true
    }, 100)
  },
  computed: {
    ...mapState(['loggedIn'])
  }
}
</script>