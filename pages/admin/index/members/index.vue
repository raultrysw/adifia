<template>
  <section v-if="loaded">
    <h2>Listado de miembros</h2>
    <div class="member">
      <nuxt-child />
    </div>
    <div class="members" v-for="(member, index) in members" :key="index">
      <div>
        <nuxt-link :to="'/admin/members/' + member._id">{{member.name}} - {{member.surname}}</nuxt-link>
      </div>
    </div>
    <p><nuxt-link to="/admin/members/create">Crear un member</nuxt-link></p>
  </section>
</template>
<script>
// import {ROLS} from '~/settings'
import {mapState, mapMutations} from 'vuex'
import {recoverAllMembers} from '~/api/members'

export default {
  created () {
    this.recoverAllMembers()
  },
  computed: {
    ...mapState('administration', ['members']),
    loaded () {
      return this.members.length > 0
    }
  },
  methods: {...mapMutations('administration', ['submitMembers']), recoverAllMembers}
}
</script>
