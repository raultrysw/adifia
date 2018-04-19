<template>
  <section>
    <h2>Registrate en AdifiA</h2>
    <my-form :errors="errors" @changedData="onChangedData"  :onSubmit="submitMember"
        text="Registrate" urlCb="/" textCb="Volver atras">
      
      <my-input palceholder="Nombre" text="Tu nombre" v-model="member.name" />
      <my-input palceholder="Apellidos" text="Tus apellidos" v-model="member.surname" />
      <my-input palceholder="Email" text="Correo electrónico" v-model="member.email" />
      <my-input palceholder="Contraseña" text="Tu contraseña" type="password" v-model="member.password" />
    
    </my-form>
  </section>
</template>
<script>
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
    onChangedData () {},
    submitMember () {
      let url = '/members'
      this.makeRequest({url, data: this.member}, 'post',
        ({memberCreated}) => {
          console.log('Se ha creado', memberCreated)
          this.$router.push('/')
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
