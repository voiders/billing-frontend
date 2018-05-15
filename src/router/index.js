import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Receipt from '@/components/receipt/Receipt'
import GenReceipt from '@/components/receipt/GenReceipt'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
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
    }
  ]
})
