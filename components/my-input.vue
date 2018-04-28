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