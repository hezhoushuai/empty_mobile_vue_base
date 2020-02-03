const Home = () => import('@/views/Home/index.vue')

export default [{
  path: '/',
  redirect: '/home'
}, {
  path: '/home',
  name: 'Home',
  components: {
    default: Home
  }
}]
