// home page
import HomePage from './pages/HomePage'
// vue
import Vue from 'vue'
//
import {
  Card,
  Row,
  Col
} from 'element-ui'

// router
import VueRouter from 'vue-router'

// have to use router
Vue.use(VueRouter)
//
Vue.use(Card)
Vue.use(Row)
Vue.use(Col)

// router with history false
var router = new VueRouter({
  history: false
})

//
router.map({
  // home /
  '/': {
    component: HomePage
  }
})

export default router
