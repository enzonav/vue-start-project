import Home from '../components/Home.vue'
import About from '../components/About.vue'
import Contacts from '../components/Contacts.vue'
import TestVuex from '../components/TestVuex.vue'
import testInput from '../components/testInput.vue'
import TestServer from '../components/TestServer.vue'
import newComponent from '../components/newComponent.vue'
import headerComponent from '../components/pComponent.vue'
// import Sharing from '../components/Sharing.vue'

export const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/contacts', component: Contacts },
  { path: '/test-vuex', component: TestVuex },
  { path: '/test-server', component: TestServer },
  { path: '/test-input', component: testInput },
  { path: '/test-watch', component: newComponent },
  { path: '/data-fetch', component: headerComponent }
  /*
  { path: '/sharing-components', component: Sharing }
  */
]

/*
1 - create component
2 - import component
2 - create route
3-  create router link in header.vue
*/
