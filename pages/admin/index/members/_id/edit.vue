<template>
  <section>
    <h2>Editando {{$route.query.id}}</h2>
    <form @submit.prevent="submitMember">
      <my-input placeholder="Escribe tu nombre" type="text" text="Nombre" v-model="member.name" />
      <my-input placeholder="Escribe tus apellidos" type="text" text="Apellidos" v-model="member.surname" />
      <my-input placeholder="Escribe tu correo electrónico" type="text" text="Correo electrónico" v-model="member.email" />
      <div>
        <p><nuxt-link to="/admin/members">Volver atras</nuxt-link> <button type="submit"> Actualizar</button></p>
      </div>
    </form>
  </section>
</template>
<script>
export default {
  data () {
    return {
      member: {}
    }
  },
  created () {
    this.makeRequest({url: this.memberUri}, 'get',
      ({member}) => {
        this.member = member
      }, (error) => {
        console.log(error)
      }
    )
  },
  computed: {
    memberUri () {
      return '/members/' + this.$route.params.id
    }
  },
  methods: {
    submitMember () {
      this.makeRequest({url: this.memberUri, data: this.member}, 'put',
        ({member}) => {
          document.dispatchEvent(new Event('update-members'))
          this.$router.push('/admin/members/' + member._id)
        }, (error) => {
          console.log(error)
        }
      )
    }
  }
}
</script>
