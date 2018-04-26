<template>
  <section v-if="published">
    <h1>El evento fue publicado</h1>
    <p><nuxt-link to="/admin/events">Volver atras</nuxt-link></p>
  </section>
</template>
<script>
import {mapState, mapMutations} from 'vuex'
import {makeEventPublished} from '~/api/events'

export default {
  data () { return {published: true} },
  created () {
    this.makeEventPublished()
  },
  computed: {
    ...mapState('administration', ['events'])
  },
  methods: {makeEventPublished, ...mapMutations('administration', ['publishEvent'])}
}
</script>
