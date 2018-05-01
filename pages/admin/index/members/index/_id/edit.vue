<template>
  <section>
    <h2>Editando {{$route.query.id}}</h2>
    <form @submit.prevent="putMember">
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
import {mapGetters, mapMutations} from 'vuex'
import {putMember, recoverAllMembers} from '~/api/members'

export default {
  data: () => ({member: {}}),
  created () {
    if (!Object.keys(this.member).length) {
      this.recoverAllMembers(() => {
        this.member = this.getMember()(this.$route.params.id)
      })
    }
  },
  computed: {
    loaded () {
      return this.member !== undefined
    }
  },
  methods: {recoverAllMembers,
    putMember,
    ...mapMutations('administration', ['submitMembers']),
    ...mapGetters('administration', ['getMember'])
  }
}
</script>
