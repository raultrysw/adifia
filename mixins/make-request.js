import {PORT, HOST, userTokenKey} from '../settings'

import axios from 'axios'
axios.defaults.baseURL = `http://${HOST}:${PORT}/api`

function makeRequest ({url, data, token}, method, cb, errorCb) {
  let options = {}
  if (token) {
    if (method === 'get') url += '&token' + '=' + token
    else {
      options.headers = {
        [userTokenKey]: token
      }
    }
  }

  axios[method](url, data, options).then(({data}) => {
    try {
      cb(data.items)
    } catch (error) {
      console.log('un error fue disparado despues de la petición', error)
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
