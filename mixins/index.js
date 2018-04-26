import Vue from 'vue'
import axiosMixin from './make-request'
import requestsMixins from './requests-mixins'

import {mapState, mapMutations} from 'vuex'

let defaultTitle = 'Sin titulo'

const globalMixin = {
  computed: {...mapState(['currentTitle'])},
  beforeRouteEnter (to, from, next) {
    next(vm => {
      console.log('Estaablecineod titulo', vm)
      debugger //eslint-disable-line
      vm.setTitle(vm.title || defaultTitle)
      document.title = 'Adifia | ' + vm.currentTitle
    })
  },
  methods: {...mapMutations(['setTitle'])},
  filters: {
    formatDate (value) {
      let d = new Date(value)
      return d.getFullYear() + '/' + (d.getMonth() + 1) + '/' + d.getDate()
    }
  }
}

const mixins = [axiosMixin, requestsMixins, globalMixin]

mixins.forEach(mixin => Vue.mixin(mixin))
