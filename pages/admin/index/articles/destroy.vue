<template>
  
</template>

<script>
export default {
  created () {
    this.makeRequest({url: this.articleUrl}, 'delete',
      () => {
        this.$router.push('/articles')
      }, (data) => {
        console.log(data)
      }
    )
  },
  computed: {
    articleUrl () {
      return '/articles/' + this.$route.query.id
    }
  }
}
</script>
