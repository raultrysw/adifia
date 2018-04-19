<template>
  <section>
    <h2>Creando un miembro</h2>
    <my-form :errors="errors" @changedData="onChangedData"  :onSubmit="submitMember"
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
import {mapGetters} from 'vuex'
import RolsComponent from '~/components/rols'
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
  computed: {
    ...mapGetters(['token'])
  },
  methods: {
    submitMember () {
      let url = '/members'
      const {token} = this
      this.makeRequest({url, data: this.member, token}, 'post',
        ({memberCreated}) => {
          console.log('Se ha creado', memberCreated)
          this.$router.push('/admin/members/' + memberCreated._id)
        }, ({errors}) => {
          this.errors = []
          setTimeout(() => {
            this.errors = errors
          }, 100)
        }
      )
    }
  }
}
</script>
