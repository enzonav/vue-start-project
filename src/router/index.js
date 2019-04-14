import Home from '../components/Home.vue'
import About from '../components/About.vue'
import Contacts from '../components/Contacts.vue'
import TestVuex from '../components/TestVuex.vue'

export const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/contacts', component: Contacts },
  { path: '/test-vuex', component: TestVuex }
]
