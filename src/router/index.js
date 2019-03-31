import Home from '../components/Home.vue'
import About from '../components/About.vue'
import Contacts from '../components/Contacts.vue'
import TodoList from '../components/Todo.vue'

export const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/contacts', component: Contacts },
  { path: '/todo', component: TodoList }
]
