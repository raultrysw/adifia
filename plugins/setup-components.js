import Vue from 'vue'
import MyInput from '~/components/my-input.vue'
import MyForm from '~/components/my-form.vue'

import FontAwesomeIcon from '@fortawesome/vue-fontawesome'
import fontawesome from '@fortawesome/fontawesome'

import { faPlus } from '@fortawesome/fontawesome-free-solid'

fontawesome.library.add(faPlus)

Vue.component('my-input', MyInput)
Vue.component('my-form', MyForm)
Vue.component('font-awesome', FontAwesomeIcon)
