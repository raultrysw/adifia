import {PORT, HOST} from '~/settings'

import axios from 'axios'
axios.defaults.baseURL = `http://${HOST}:${PORT}/api`

function makeRequest ({url, data, options}, method, cb, errorCb) {
  axios[method](url, data, options).then(({data}) => {
    try {
      cb(data.items)
    } catch (error) {
      console.error('un error fue disparado despues de la petición', error)
    }
  }).catch(({response}) => {
    errorCb(response.data.items)
  })
}

export default {
  methods: {
    makeRequest
  }
}
