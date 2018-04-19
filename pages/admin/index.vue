<template>
  <section>
    <nuxt-child />
  </section>
</template>
<script>
export default {
  layout: 'admin',
  created () {
    const {path} = this.$route
    if (new RegExp(/\/admin\/?$/).test(path)) {
      this.$router.push('/admin/members')
    }
  }
}
</script>
