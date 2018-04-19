<template>
  
</template>

<script>
export default {
  created () {
    this.makeRequest({url: this.eventUrl}, 'delete',
      () => {
        this.$router.push('/events')
      }, (data) => {
        console.log(data)
      }
    )
  },
  computed: {
    eventUrl () {
      return '/events/' + this.$route.query.id
    }
  }
}
</script>
