// like index page
// main include app, router, store
// app
import App from './pages/App'
// router
import router from './router'
import store from './vuex/store' // vuex store instance
import { sync } from 'vuex-router-sync'

// so store and router sync
sync(store, router)

// router start the ap
router.start(App, '#app')
