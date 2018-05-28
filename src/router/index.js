import Vue from 'vue'
import Router from 'vue-router'
import Receipt from '@/components/receipt/Receipt'
import GenReceipt from '@/components/receipt/GenReceipt'

Vue.use(Router)

export default new Router({
  routes: [
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
