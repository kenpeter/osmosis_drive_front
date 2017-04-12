// root store
// vue
import Vue from 'vue'
import Vuex from 'vuex'
import cars from './car/store'
import createLogger from 'vuex/logger'

Vue.use(Vuex)
Vue.config.debug = true

const debug = process.env.NODE_ENV !== 'production'

// it is like root reducer. (root store)
// it combines 2 reducers. (2 stores)
export default new Vuex.Store({
  modules: {
    cars
  },
  strict: debug,
  middlewares: debug ? [createLogger()] : []
})
