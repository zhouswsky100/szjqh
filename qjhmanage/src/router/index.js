import Vue from 'vue'
import Router from 'vue-router'
import page from '../views'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  routes: [
    {
      path: '/',
      name: 'index',
      component: page.Index,
      redirect: {name: 'login'},
      children: [
        {
          path: '/main',
          name: 'main',
          component: page.Main
        },
        {
          path: '/news',
          name: 'news',
          component: page.news
        },{
          path: '/seek',
          name: 'seek',
          component: page.seek
        }
        ,{
          path: '/banner',
          name: 'banner',
          component: page.banner
        }

        ,{
          path: '/db',
          name: 'db',
          component: page.db
        }

        ,{
          path: '/foot',
          name: 'foot',
          component: page.foot
        }
        ,{
          path: '/hezuoshang',
          name: 'hezuoshang',
          component: page.hezuoshang
        } ,{
          path: '/jiangshi',
          name: 'jiangshi',
          component: page.jiangshi
        } ,{
          path: '/kechen',
          name: 'kechen',
          component: page.kechen
        } ,{
          path: '/lanmu',
          name: 'lanmu',
          component: page.lanmu
        } ,{
          path: '/server',
          name: 'server',
          component: page.server
        } ,{
          path: '/wangqikecheng',
          name: 'wangqikecheng',
          component: page.wangqikecheng
        },{
          path: '/youqing',
          name: 'youqing',
          component: page.youqing
        },{
          path: '/logo',
          name: 'logo',
          component: page.logo
        },{
          path: '/webtit',
          name: 'webtit',
          component: page.webtit
        },{
          path: '/webms',
          name: 'webms',
          component: page.webms
        },{
          path: '/webtit',
          name: 'webtit',
          component: page.webtit
        } ,{
          path: '/rightTel',
          name: 'rightTel',
          component: page.rightTel
        } ,{
          path: '/webc',
          name: 'webc',
          component: page.webc
        }
        
      ]
    },
    {
      path: '/Login',
      name: 'login',
      component: page.login
    }
  ],

})
