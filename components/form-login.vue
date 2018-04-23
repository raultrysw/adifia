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
import {signIn} from '~/api/members.js'

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
  methods: {signIn}
}
/*
USUARIO PRUEBA
  email: raul@gmail.com
  password: root
*/
</script>
