<template>
  <section>
    <h2>Registrate en AdifiA</h2>
    <my-form :errors="errors" :onSubmit="signUp"
        text="Registrate" urlCb="/" textCb="Volver atras">
      
      <my-input palceholder="Nombre" text="Tu nombre" v-model="member.name" />
      <my-input palceholder="Apellidos" text="Tus apellidos" v-model="member.surname" />
      <my-input palceholder="Email" text="Correo electrónico" v-model="member.email" />
      <my-input palceholder="Contraseña" text="Tu contraseña" type="password" v-model="member.password" />
    
    </my-form>
  </section>
</template>
<script>
import {signUp} from '~/api/members'
export default {
  data () {
    return {
      errors: [],
      member: {
        name: '',
        surname: '',
        email: '',
        password: ''
      }
    }
  },
  methods: {
    signUp
  }
}
</script>
