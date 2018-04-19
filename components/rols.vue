<template>
  <label>
        <span>Rol</span>
        <select @change="emitValue" :value="active">
          <option v-for="(rol, index) in ROLS" :key="index" :value="index">{{rol}}</option>
        </select>
      </label>
</template>
<script>
import {ROLS} from '~/settings'
export default {
  props: ['active'],
  data () {
    return {
      ROLS
    }
  },
  methods: {
    emitValue ({target}) {
      this.$emit('input', target.value)
    }
  }
}
</script>
