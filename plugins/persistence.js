import createPersistedState from 'vuex-persistedstate'

export const key = 'adifia-cache'

const paths = [key]

export default ({store}) => {
  console.log('configurando localstorage')
  createPersistedState({key, paths})(store)
}
