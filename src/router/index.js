import Vue from 'vue'
import Router from 'vue-router'
import OrgManage from '@/components/OrgManage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'OrgManage',
      component: OrgManage
    }
  ]
})
