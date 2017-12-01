import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/hello'
import Index from '@/components/index/index'
import Main from '@/components/main/main'
import Person from '@/components/person'
import Seacher from '@/components/seacher'
import Detail from '@/components/detail'
import RwDetail from '@/components/rwdetail'
import Rw from '@/components/rw'
import Login from '@/components/login/login'
import Register from '@/components/register/register'
import Question from '@/components/register/question'
import Personal from '@/components/person/personal'
import Seting from '@/components/seting/seting'
import Password from '@/components/seting/password'
import Mybanks from '@/components/banks/mybanks'
import Addbanks from '@/components/banks/addbanks'
import Order from '@/components/order/order'
import TosellDetail from '@/components/tosell/toselldetail'
import TosellMain from '@/components/tosell/tosellmain'
import Commission from '@/components/mission/commission'
import Certification from '@/components/certification/certification'
import Addz from '@/components/certification/addz'
import Addx from '@/components/certification/addx'
import Addf from '@/components/certification/addf'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello,
      children: [
        {
          path: '', name: 'index', component: Index,

        },
        {
          path: '/Hello/index', name: 'index', component: Index,

        },

        {
          path: '/Hello/main', name: 'main', component: Main

        },
        {
          path: '/Hello/person', name: 'person', component: Person
        }
      ]
    },
    { path: '/Seacher', name: 'Seacher', component: Seacher },
    { path: '/datail', name: 'Datail', component: Detail },
    { path: '/rwdetail', name: 'RwDetail', component: RwDetail },
    { path: '/rw', name: 'Rw', component: Rw },
    { path: '/login', name: 'Login', component: Login },
    { path: '/register', name: 'Register', component: Register },
    { path: '/question', name: 'Question', component: Question },
    { path: '/personal', name: 'Personal', component: Personal },
    { path: '/seting', name: 'Seting', component: Seting },
    { path: '/password', name: 'Password', component: Password },
    { path: '/mybanks', name: 'Mybanks', component: Mybanks },
    { path: '/addbanks', name: 'Addbanks', component: Addbanks },
    { path: '/order', name: 'Order', component: Order },
    { path: '/toselldetail', name: 'TosellDetail', component: TosellDetail },
    { path: '/tosellmain', name: 'TosellMain', component: TosellMain },
    { path: '/commission', name: 'Commission', component: Commission },
    { path: '/certification', name: 'Certification', component: Certification },
    { path: '/addz', name: 'Addz', component: Addz },
    { path: '/addx', name: 'Addx', component: Addx },
    { path: '/addf', name: 'Addf', component: Addf }
  ]
})
