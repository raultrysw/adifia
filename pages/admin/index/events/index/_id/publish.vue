<template>
  <section>
    <h3 v-if="published">Publicado</h3>
  </section>
</template>
<script>
import {mapGetters} from 'vuex'
export default {
  data () {
    return {
      published: false
    }
  },
  created () {
    const {url, token} = this
    let data = {state: 1}
    this.makeRequest({url, data, token}, 'put',
      () => { this.published = true },
      () => console.log('hubo un errror')
    )
  },
  computed: {
    ...mapGetters(['token']),
    url () {
      const {id} = this.$route.params
      return '/events/' + id
    }
  }
}
</script>
