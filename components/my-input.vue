<template>
  <label class="input-control">
    <span class="input-control__text">{{text}}</span>
    <input class="input-control__box" @input="sendData" :placeholder="placeholder" :value="value" :type="type || 'text'" />
  </label>
</template>
<script>
export default {
  props: ['placeholder', 'type', 'text', 'value'],
  methods: {
    sendData (e) {
      this.$emit('input', e.target.value)
    }
  }
}
</script>
<style lang="scss">
.input-control {
  border: 1px;
  padding: .5em;
  margin: 1em;
  &__text, &__box {
    display: block;
    font-size: 1.2em;
  }
  &__text {
    font-size: 1.5em;
  }
  &__box {
    width: 100%;
    padding: .3em;
    box-sizing: border-box;
  }
}
</style>
