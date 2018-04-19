<template>
  
</template>

<script>
export default {
  created () {
    this.makeRequest({url: this.photoUrl}, 'delete',
      () => {
        this.$router.push('/photos')
      }, (data) => {
        console.log(data)
      }
    )
  },
  computed: {
    photoUrl () {
      return '/photos/' + this.$route.query.id
    }
  }
}
</script>
