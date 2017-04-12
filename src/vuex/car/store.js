// receive product and add to cart
import {
  RECEIVE_CARS
} from '../mutation-types'

// products has a state all.
// initial state
const state = {
  all: []
}

// mutations
const mutations = {
  // now receive products
  // then we have state and products
  // state.all, assign products.
  [RECEIVE_CARS] (state, cars) {
    state.all = cars
  }
}

// export state and setters
export default {
  state,
  mutations
}
