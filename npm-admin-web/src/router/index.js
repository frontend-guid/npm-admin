import Vue from 'vue';
import Router from 'vue-router';
import {GetToken, SetToken} from '@/common/js/util';
import Store from '@/store';
import {CommonApi} from '@/api';

// 路由
// 401
const NoAuth = () => import('@/views/error/401.vue');
// 404
const NotFound = () => import('@/views/error/404.vue');
// Excel
const Excel = () => import('@/views/excel');
// HomePage
const HomePage = () => import('@/views/homepage');
// Repo
const Repo = () => import('@/views/repo');
const RepoList = () => import('@/views/repo/list.vue');
const RepoEdit = () => import('@/views/repo/edit.vue');
const RepoView = () => import('@/views/repo/view.vue');
Vue.use(Router);

const router = new Router({
  routes: [
  // 默认
  {
    path: '/',
    redirect: '/home' // 默认选中  注意这里是redirect 值是路径 同时注意区分大小写，路由是否选中是根据url路径来判断的
  },
  {
    path: '/home',
    name: 'HomePage',
    component: HomePage
  },
  {
    path: '/excel',
    name: 'Excel',
    component: Excel
  },
  {
    path: '/noAuth',
    name: 'NoAuth',
    component: NoAuth
  },
  {
    path: '*',
    name: 'NotFound',
    component: NotFound
  },
  {
    path: '/repo',
    name: 'Repo',
    component: Repo,
    children: [
    {
      path: 'list',
      name: 'RepoList',
      component: RepoList
    },
    {
      path: 'edit',
      name: 'RepoEdit',
      component: RepoEdit
    },
    {
      path: 'view',
      name: 'RepoView',
      component: RepoView
    }
    ]
  }
  ]
});

// 因为是嵌入其他系统，并没有登入登出按钮，因此到底是url优先级高还是cookie优先级高很难确定

// 在路由跳转时判断token和cookie情况，如果存在则写入vuex
// 在api请求时，就只从vuex中获取了
router.beforeEach(async (to, from, next) => {
  // 1.0 判断cookie中是否有用户信息
  let userInfo = GetToken();
  // 2.0 如果cookie中没有用户信息，则通过route.query.token调用api去获取
  if (!userInfo) {
    const token = to.query ? to.query.token : '';
    // 如果token存在，则call api 获取UserInfo
    if (token) {
      try {
        const userInfo = await CommonApi.queryUserInfoByToken({Token: token});
        console.log('userInfo', userInfo);
        const username = userInfo.UserName;
        // 查询到的username不为空写入cookie及vuex
        if (username) {
          SetToken(username);
          Store.commit('set_user_info', username);
          next();
        } else {
          console.log('返回用户名为空');
          next({path: '/noAuth'});
        }
      } catch (err) {
        console.log(err);
        next({path: '/noAuth'});
      }
    } else {
    // 如果不是错误页面，同时token不存在，则跳错误页面
    // 将来如果有不需要登录的页面，都需要在这里添加，否则会circle loop
    if (to.name !== 'NoAuth') {
      next({path: '/noAuth'});
    } else {
      next();
    }
  }
} else {
    // 3.0 如果从cookie中可以获取到用户信息，则写入vuex
    Store.commit('set_user_info', userInfo);
    next();
  }
});

export default router;
