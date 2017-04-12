import shop from '../../api/car'
import * as types from '../mutation-types'

// export const
// get all products
// it is func
// pass {dipatch}
export const getAllCars = ({ dispatch }) => {
  // API call......
  // shop.getProducts
  // pass in a allback to api
  // then once has products
  // we dispatch products
  shop.getCars(cars => {
    // test
    console.log('--- getAllCars ---')
    console.log(cars)
    // dspatch
    // type
    dispatch(types.RECEIVE_CARS, cars)
  })
}
