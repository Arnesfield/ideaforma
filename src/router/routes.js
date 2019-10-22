const Home = () => import(/* webpackChunkName: "home" */ '@/views/Home')
const Team = () => import(/* webpackChunkName: "team" */ '@/views/Team')

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
    path: '/team',
    name: 'team',
    component: Team,
    meta: {
      title: 'Meet the Team'
    }
  },

  {
    path: '*',
    redirect: '/'
  }
]

export default routes
