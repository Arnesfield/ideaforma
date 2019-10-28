const Home = () => import(/* webpackChunkName: "home" */ '@/views/Home')
const Team = () => import(/* webpackChunkName: "team" */ '@/views/Team')
const Projects = () => import(/* webpackChunkName: "projects" */ '@/views/Projects')

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
    path: '/projects/:dir',
    name: 'projects',
    component: Projects,
    props: true,
    meta: {
      title: 'Featured Projects'
    }
  },

  {
    path: '*',
    redirect: '/'
  }
]

export default routes
