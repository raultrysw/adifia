<template>
  <section v-if="loaded">
    <h2>Listado de miembros</h2>
    <div v-for="(member, index) in members" :key="index">
      <div>
        <nuxt-link :to="'/admin/members/' + member._id">{{member.name}} - {{member.surname}}</nuxt-link>
      </div>
    </div>
    <!-- <table>
      <thead>
        <th>name</th>
        <th>surname</th>
        <th>email</th>
        <th>password</th>
        <th>actions</th>
      </thead>
      <tr v-for="(member, index) in members" :key="index">
        <td>{{member.name}}</td>
        <td>{{member.surname}}</td>
        <td>{{member.email}}</td>
        <td>{{member.password}}</td>
        <td>
          <nuxt-link :to="'/admin/members/' + member._id">View</nuxt-link> -
          <nuxt-link :to="'/admin/members/edit?id=' + member._id">Edit</nuxt-link>
          <nuxt-link :to="'/admin/members/' + member._id + '/destroy' + '?confirmation=' + member.name + ' ' + member.surname">Eliminar</nuxt-link>
        </td>
      </tr>
    </table> -->
    <p><nuxt-link to="/admin/members/create">Crear un member</nuxt-link></p>
    <div>
      <nuxt-child />
    </div>
  </section>
</template>
<script>
import {ROLS} from '~/settings'

const routeUpdateOn = [
  'admin-index-members-index-id-index-destroy',
  'admin-index-members-index-id-edit'
]

export default {
  data () {
    return {
      members: [],
      loaded: false
    }
  },
  // updated () {
  //   this.reloadData()
  // },
  beforeRouteUpdate (to, from, next) {
    const {name} = from
    console.log(name)
    if (routeUpdateOn.indexOf(name) !== -1) {
      this.reloadData()
    }
    next()
  },
  mounted () {
    this.reloadData()
    document.addEventListener('update-members', this.reloadData)
  },
  methods: {
    reloadData () {
      this.members = []
      this.getMembers((members) => {
        this.members = members.filter(member => member.pvLvl !== ROLS.length)
        this.loaded = true
      })
    }
  }
}
</script>
