<template>
  <form @keydown="$emit('changedData')" @submit.prevent="onSubmit">
      <ul v-if="errors">
        <li v-for="(error, index) in errors" :key="index">{{error}}</li>
      </ul>
      <slot />
      <div>
        <p><nuxt-link :to="urlCb">{{textCb}}</nuxt-link> <button type="submit"> {{text}}</button></p>
      </div>
    </form>
</template>
<script>
export default {
  props: ['errors', 'onSubmit', 'text', 'urlCb', 'textCb']
}
</script>
