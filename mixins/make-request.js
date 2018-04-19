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
  console.log('haciendo peticion a', url)

  axios[method](url, data, options).then(({data}) => {
    console.log(data.message)
    cb(data.items)
  }).catch(({response}) => {
    debugger //eslint-disable-line
    console.log('An error was dispatched', response)
    errorCb(response.data.items)
  })
}

export default {
  methods: {
    makeRequest
  }
}
