<template>
  <form @keydown="$emit('changedData')" ref="formEvent" @submit.prevent="onSubmit">
      <ul v-if="errors">
        <li v-for="(error, index) in errors" :key="index">{{error}}</li>
      </ul>
      <slot />
      <div >
        <p><nuxt-link v-if="urlCb" :to="urlCb">{{textCb}}</nuxt-link> <button type="button" @click="dispatchSubmit"> {{text}}</button></p>
      </div>
    </form>
</template>
<script>
export default {
  props: ['errors', 'onSubmit', 'text', 'urlCb', 'textCb'],
  methods: {
    dispatchSubmit () {
      let ev = new Event('submit')
      this.$refs.formEvent.dispatchEvent(ev)
    }
  }
}
</script>
