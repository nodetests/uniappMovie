import Vue from 'vue'
import App from './App'
import store from './store'

Vue.prototype.$store = store
Vue.prototype.$api =(url)=>{
	return `https://www.imovietrailer.com/superhero/${url}?qq=2684425594`
}
Vue.config.productionTip = false
App.mpType = 'app'

const app = new Vue({
    ...App,
	store
})
app.$mount()
