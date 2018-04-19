<template>
  <section>
    <p>name {{member.name}}</p>
    <p>surname {{member.surname}}</p>
    <p>email {{member.email}}</p>
    <rols-component :active="pvLvl" v-model="pvLvl" />
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
import RolsComponent from '~/components/rols'
export default {
  components: {RolsComponent},
  data () {
    return {
      member: {},
      pvLvl: null
    }
  },
  created () {
    this.recoverMember()
  },
  beforeRouteUpdate (to, from, next) {
    const {id} = to.params
    this.$route.params.id = id
    this.recoverMember()
    next()
  },
  methods: {
    recoverMember () {
      this.makeRequest({url: this.memberUrl}, 'get',
        ({member}) => {
          this.member = member
          this.pvLvl = member.pvLvl
        }, (data) => {
          console.log(data)
        }
      )
    }
  },
  watch: {
    pvLvl (oldValue, newValue) {
      const data = {
        pvLvl: this.pvLvl
      }
      this.makeRequest({url: this.memberUrl, data, auth: true}, 'put',
        ({member}) => {
          this.member.pvLvl = data.pvLvl
        }, (errors) => {
          debugger //eslint-disable-line
          this.pvLvl = this.member.pvLvl
        }
      )
    }
  },
  computed: {
    memberUrl () {
      return '/members/' + this.$route.params.id
    },
    editLink () {
      return '/admin/members/' + this.member._id + '/edit'
      // return '/admin/members/edit?id=' + this.member._id
    },
    destroyLink () {
      let destroyAddress = '/admin/members/' + this.member._id + '/destroy'
      let confirmationText = '?confirmation=' + this.member.name + ' ' + this.member.surname
      return destroyAddress + confirmationText
    }
  }
}
</script>
