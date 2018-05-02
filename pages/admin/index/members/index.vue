<template>
  <section v-if="loaded">
    <nuxt-child class="election" />
    <div class="election-list">
      <div v-for="(member, index) in members" :key="index">
        <div>
          <nuxt-link :to="'/admin/members/' + member._id">{{member.name}} - {{member.surname}}</nuxt-link>
        </div>
      </div>
    </div>
    <nuxt-link class="fab" to="/admin/members/create">
      <font-awesome icon="plus" />
    </nuxt-link>
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
