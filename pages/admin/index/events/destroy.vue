<template>
  
</template>

<script>
import {mapMutations} from 'vuex'
import {deleteEvent} from '~/api/events'

export default {
  created () {
    this.deleteEvent()
  },
  methods: {deleteEvent, ...mapMutations('administration', ['removeEvent'])}
}
</script>
