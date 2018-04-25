<template>
  <section>
    <h2>Creando un miembro</h2>
    <my-form :errors="errors" :onSubmit="postMember"
        text="Registrate" urlCb="/" textCb="Volver atras">
      
      <my-input palceholder="Nombre" text="Tu nombre" v-model="member.name" />
      <my-input palceholder="Apellidos" text="Tus apellidos" v-model="member.surname" />
      <my-input palceholder="Email" text="Correo electrónico" v-model="member.email" />
      <my-input palceholder="Contraseña" text="Tu contraseña" type="password" v-model="member.password" />
      <rols-component v-model="member.pvLvl" />
    </my-form>
  </section>
</template>
<script>
import {mapMutations} from 'vuex'
import RolsComponent from '~/components/rols'
import {postMember} from '~/api/members'

export default {
  components: {RolsComponent},
  data () {
    return {
      errors: [],
      member: {
        name: '',
        surname: '',
        email: '',
        password: '',
        pvLvl: 0
      }
    }
  },
  methods: {...mapMutations('administration', ['addMember']), postMember}
}
</script>
