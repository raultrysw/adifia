<template>
  <my-form :errors="errors" :onSubmit="signIn" text="Entra a adifia" urlCb="/signup" textCb="Registrarse ">
    <my-input v-model="user.email" placeholder="Correo electrónico" text="Correo electrónico" />
    <my-input v-model="user.password" placeholder="Contraseña" type="password" text="Contraseña" />
  </my-form>
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
