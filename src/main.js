import { createRouter, createWebHashHistory } from 'vue-router'
import { createApp } from 'vue'
import App from './App.vue'
import Product from './components/product/Import/Form.vue'
import Result from './components/product/Import/Result.vue'
import './assets/main.css'

// Define some routes. each route should map to a component.
const routes = [
  { path: '/', component: Product },
  { path: '/batch/:id', component: Result }
]

const router = createRouter({
  // Provide the history implementation to use.
  history: createWebHashHistory(),
  // short for `routes: routes`
  routes
})

const app = createApp(App)
app.use(router)

app.mount('#app')
