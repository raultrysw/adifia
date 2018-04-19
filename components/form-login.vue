<template>
  <form @submit.prevent="logIn">
      <ul v-if="errors">
        <li v-for="(error, index) in errors" :key="index">{{error}}</li>
      </ul>
      <my-input v-model="user.email" placeholder="Correo electrónico" text="Correo electrónico" />
      <my-input v-model="user.password" placeholder="Contraseña" type="password" text="Contraseña" />
      <div>
        <p><input type="submit" value="Entrar" /></p> 
      </div>
    </form>
</template>
<script>
import loginForm from '~/components/form-login.vue'

export default {
  components: {loginForm},
  data () {
    return {
      errors: [],
      user: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    logIn () {
      this.makeRequest({url: '/members/login', data: this.user}, 'post',
        ({user}) => {
          this.errors = []
          this.$store.commit('logIn', user)
          this.$router.push('/')
        },
        ({response}) => {
          this.errors = []
          setTimeout(() => {
            this.errors = response.data.items.errors
          }, 75)
        }
      )
    }
  }
}
/*
USUARIO PRUEBA
  email: rosa@gmail.com
  password: root
*/
</script>
