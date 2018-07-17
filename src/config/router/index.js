import VueRouter from 'vue-router'
import Home from '@/components/Home'
import Sign from '@/components/account/sign'
//import ListProduct from '@/components/items/products/List'
import AddProduct from '@/components/items/products/Add'

export default new VueRouter({
  mode: 'history',
  routes: [ 
    {
      path: '*',
      redirect: '/'
    },
    {
      path: '/',
      name: 'Home',
      component: Home,
      meta : {
        requiresAuth: true
      }
    },
    {
      path: '/sign',
      name: 'Sign',
      component: Sign
    },
    {
      path: '/products',
      name: 'Products',
      component: AddProduct,
      meta : {
        requiresAuth: true
      }
    }
  ]
})