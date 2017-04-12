// axios
import axios from 'axios'

// export obj
export default {
  // cb is used to dispatch...
  getCars (cb) {
    axios.get('http://driveback.shopshop.space/car/list?limit=100')
      .then((res) => {
        cb(res.data)
      })
  }
}
