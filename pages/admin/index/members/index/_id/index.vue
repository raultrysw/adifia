<template>
  <section v-if="loaded">
    <h3>Nombre</h3>
    <p>{{member.name}}</p>
    <h3>Apellidos</h3>
    <p>{{member.surname}}</p>
    <h3>Correo electrónico</h3>
    <p>{{member.email}}</p>
    <h3>Rol del miembro</h3>
    <rols-component @change="changeRol" :active="pvLvl" v-model="pvLvl" />
    <p><nuxt-link to="/admin/members">Volver atras</nuxt-link></p>
    <div>
      <nuxt-link :to="editLink">Editar</nuxt-link>
      <nuxt-link :to="destroyLink">Eliminar</nuxt-link>
    </div> 
    <div>
      <nuxt-child />
    </div>
  </section>
</template>
<script>
import {mapGetters, mapMutations} from 'vuex'
import RolsComponent from '~/components/rols'
import {putRolToMember, recoverAllMembers} from '~/api/members'

function changeRol (target) {
  let data = {pvLvl: target.value}
  const {id} = this.$route.params
  this.putRolToMember(data, id)
}

export default {
  components: {RolsComponent},
  methods: {putRolToMember,
    changeRol,
    recoverAllMembers,
    ...mapMutations('administration', ['submitMembers', 'restoreRol', 'switchRol']),
    ...mapGetters('administration', ['getMember'])
  },
  created () {
    if (!this.member) this.recoverAllMembers()
  },
  computed: {
    editLink () {
      return '/admin/members/' + this.member._id + '/edit'
    },
    destroyLink () {
      let destroyAddress = '/admin/members/' + this.member._id + '/destroy'
      return destroyAddress
    },
    loaded () {
      return this.member !== undefined
    },
    member () {
      return this.getMember()(this.$route.params.id)
    },
    pvLvl: {
      get () {
        return this.member.pvLvl
      },
      set (rol) {
        console.log('Cambiaando rol a', rol)

        const {id} = this.$route.params
        this.switchRol({id, rol})
      }
    }
  }
}
</script>
