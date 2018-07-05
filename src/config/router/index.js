import VueRouter from 'vue-router'
import Home from '@/components/Home'
import SignIn from '@/components/account/signin'
import SignUp from '@/components/account/signup'
//import ListProduct from '@/components/items/products/List'
import AddProduct from '@/components/items/products/Add'

export default new VueRouter({
  mode: 'history',
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
    },
    {
      path: '/products',
      name: 'Products',
      component: AddProduct
    }
  ]
})