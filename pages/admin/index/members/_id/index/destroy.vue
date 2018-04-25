<template>
  <section>
    <h3>Seguro que desea eliminar este miembro ({{$route.params.id}})</h3>
    <div>
      <p>Si es asi, pon <strong>{{confirmation}}</strong> aqui <input v-model="anwser" type="text" />:
        <button  @click="deleteMember">Eliminar</button></p>
    </div>
  </section>
</template>

<script>
import {deleteMember} from '~/api/members'
import {mapMutations, mapGetters} from 'vuex'

export default {
  name: 'members-destroy',
  data () {
    return {
      anwser: ''
    }
  },
  computed: {
    confirmation () {
      let member = this.getMember()(this.$route.params.id)
      return member.name + ' ' + member.surname
    }

  },
  methods: {deleteMember, ...mapMutations('administration', 'deleteMember'), ...mapGetters('administration', ['getMember'])}
}
</script>
