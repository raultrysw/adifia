import Vue from 'vue'
import axiosMixin from './make-request'
import requestsMixins from './requests-mixins'

const globalMixin = {
  computed: {
    title () {
      return 'Sin titulo'
    }
  },
  filters: {
    formatDate (value) {
      let d = new Date(value)
      return d.getFullYear() + '/' + (d.getMonth() + 1) + '/' + d.getDate()
    }
  }
}

const mixins = [axiosMixin, requestsMixins, globalMixin]

mixins.forEach(mixin => Vue.mixin(mixin))
