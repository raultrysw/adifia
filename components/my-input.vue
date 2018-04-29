<template>
  <label class="input-control">
    <span class="input-control__text">{{text}}</span>
    <textarea :rows="rows" class="input-control__box" v-if="type === 'textarea'"></textarea>
    <input v-else class="input-control__box" @input="sendData" :placeholder="placeholder" :value="value" :type="type || 'text'" />
  </label>
</template>
<script>
export default {
  props: ['placeholder', 'type', 'text', 'value', 'rows'],
  methods: {
    sendData (e) {
      this.$emit('input', e.target.value)
    }
  }
}
</script>