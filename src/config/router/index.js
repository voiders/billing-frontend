import VueRouter from 'vue-router'
import Home from '@/components/Home'
import Sign from '@/components/account/sign'
//import ListProduct from '@/components/items/products/List'
import AddProduct from '@/components/items/products/Add'
import firebase from 'firebase/app';
import 'firebase/auth';

let router = new VueRouter({
  mode: 'history',
  routes: [ 
    {
      path: '*',
      redirect: '/',
      requiresAuth: true
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
});

router.beforeEach((from,to,next)=>{
  const user = firebase.auth().currentUser;
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);

  console.log(user,requiresAuth)

  if(requiresAuth && !user)next('sign')
  else next()
})

export default router;