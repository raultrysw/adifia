<template>
  <section v-if="show">
    <login-form />
  </section>
</template>
<script>
import loginForm from '~/components/form-login.vue'

export default {
  components: {loginForm},
  data () {
    return {
      show: false,
      title: 'Entra a AdifiA'
    }
  },
  created () {
    setTimeout(() => {
      if (this.loggedIn) this.$router.push('/')
      else this.show = true
    }, 100)
  }
}
</script>