import Home from '../components/Home.vue'
import About from '../components/About.vue'
import Contacts from '../components/Contacts.vue'
import TestVuex from '../components/TestVuex.vue'
import TestServer from '../components/TestServer.vue'
import testInput from '../components/testInput.vue'

export const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/contacts', component: Contacts },
  { path: '/test-vuex', component: TestVuex },
  { path: '/test-server', component: TestServer },
  { path: '/test-input', component: testInput }
]
