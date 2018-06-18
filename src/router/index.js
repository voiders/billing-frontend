import Vue from 'vue'
import Router from 'vue-router'
import Receipt from '@/components/receipt/Receipt'
import GenReceipt from '@/components/receipt/GenReceipt'
import Home from '@/components/Home'
//Products
import AddProduct from '@/components/product/AddProduct'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/print-receipt',
      name: 'Receipt',
      component: Receipt
    },
    {
      path: '/receipt',
      name: 'GenReceipt',
      component: GenReceipt
    },
    //Product
    {
      path:'/add-product',
      name: 'AddProduct',
      component: AddProduct
    }
  ]
})
