<template>
  <section>
    <h3>Seguro que desea eliminar este miembro ({{$route.params.id}})</h3>
    <div>
      <p>Si es asi, pon <strong>{{confirmation}}</strong> aqui <input v-model="anwser" type="text" />:
        <button  @click="removeMember">Eliminar</button></p>
    </div>
  </section>
</template>

<script>
export default {
  name: 'members-destroy',
  data () {
    return {
      confirmation: 'Si, estoy seguro',
      anwser: ''
    }
  },
  meta: {
    'name': 'members-destroy'
  },
  mounted () {
    this.confirmation = this.$route.query.confirmation
  },
  updated () {
    this.confirmation = this.$route.query.confirmation
  },
  methods: {
    removeMember () {
      if (this.anwser !== this.confirmation) return

      this.makeRequest({url: this.memberUrl}, 'delete',
        () => {
          this.$router.push('/admin/members')
        }, (data) => {
          console.log(data)
        }
      )
    }
  },
  computed: {
    memberUrl () {
      return '/members/' + this.$route.params.id
    }
  }
}
</script>
