import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/Home')
    },
    {
      path: '/auth/login',
      name: 'login',
      component: () => import('../views/About')
    },
    {
      path: '/auth/logout',
      name: 'login',
      component: () => import('../views/About')
    },
    {
      path: '/auth/profile',
      name: 'profile',
      component: () => import('../views/About')
    },
    {
      path: '/ticket/new',
      name: 'new',
      component: () => import('../views/Ticket')
    },
    {
      path: '/ticket/:id/edit',
      name: 'new',
      component: () => import('../views/Ticket')
    },
    {
      path: '/ticket/:id',
      name: 'new',
      component: () => import('../views/TicketDetail')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/About')
    }
  ]
});
