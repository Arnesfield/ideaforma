const Home = () => import(/* webpackChunkName: "home" */ '@/views/Home')
const About = () => import(/* webpackChunkName: "about" */ '@/views/About')

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    meta: {
      title: 'Home'
    }
  },
  {
    path: '/about',
    name: 'about',
    component: About,
    meta: {
      title: 'About'
    }
  }
]

export default routes
