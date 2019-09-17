import Vue from 'vue';
import Router from 'vue-router';
import HomeLayout from '@/layout/HomeLayout.vue';
import AuthLayout from '@/layout/AuthLayout.vue';
import Content from '@/layout/Content.vue';

Vue.use(Router);

export default new Router({
  linkExactActiveClass: 'active',
  routes: [
    {
      path: '/',
      redirect: 'login',
      component: AuthLayout,
      children: [
        {
          path: '/login',
          name: 'login',
          component: () => import('./views/Login.vue')
        },
        {
          path: '/login-help',
          name: 'login-help',
          component: () => import('./views/LoginHelp.vue')
        }
      ]
    },

    {
      path: '/home',
      redirect: '/home/articles',
      component: HomeLayout,
      name: 'home',
      children: [
        {
          path: '/home/articles',
          name: 'articles',
          component: () => import('./views/Articles.vue')
        },
        {
          path: '/home/assigned',
          name: 'assignedArticles',
          component: () => import('./views/AssignedArticles.vue')
        },
        {
          path: '/home/profile',
          name: 'profile',
          component: () => import('./views/Profile.vue')
        }
      ]
    },
    {
      path: '/view',
      component: Content,
      children: [
        {
          path: '/view/:article',
          name: 'view',
          component: () => import('./views/View Article/ViewArticle.vue')
        }
      ]
    }
  ]
});
