import Vue from 'vue'
import Router from 'vue-router'
import Categories from '@/components/Categories'
import Category from '@/components/Category'
import Activity from '@/components/Activity'

Vue.use( Router )

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Categories',
      component: Categories,
    },
    {
      path: ':slug',
      name: 'category',
      component: Category,
      props: true,
    },
    {
      // named as such because of the likelihood of the slug to change
      path: ':parent/:id',
      name: 'activity',
      component: Activity,
      props: true,
    },
  ],
})
