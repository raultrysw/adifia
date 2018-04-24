<template>
  
</template>

<script>
import {deleteAnArticle} from '~/api/articles.js'
export default {
  created () {
    this.deleteAnArticle()
  },
  computed: {
    articleUrl () {
      return '/articles/' + this.$route.query.id
    }
  },
  methods: {deleteAnArticle}
}
</script>
