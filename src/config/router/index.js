import VueRouter from 'vue-router'
import Home from '@/components/Home'
import SignIn from '@/components/account/signin'
import SignUp from '@/components/account/signup'

export default new VueRouter({
  routes: [ 
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/signin',
      name: 'SignIn',
      component: SignIn
    },
    {
      path: '/signup',
      name: 'SignUp',
      component: SignUp
    },
    {
      path: '*',
      name: 'default',
      component: Home
    }
  ]
})