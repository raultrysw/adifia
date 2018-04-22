<template>
  <section>
    <h1>Esto es un test</h1>
  </section>
</template>
<script>
export default {
  created () {
    this.getArticle('5ad5da8871dc0f42eaf89a85', this.token, article => {
      console.log('articulo recuperado', article)
    })
  }
}
</script>
