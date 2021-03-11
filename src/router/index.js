import Vue from 'vue'
import VueRouter from 'vue-router'
import Brand from '../views/Brand'
import Info from '../views/Info'
import AddInfo from '../views/AddInfo'
import Milk from '../views/Milk'
import AddMilk from '../views/AddMilk'
import Index from '../views/Index'
import AddBrand from '../views/AddBrand'
import BrandUpdate from '../views/BrandUpdate'
import InfoUpdate from '../views/InfoUpdate'
import MilkUpdate from '../views/MilkUpdate'
import BrandFind from '../views/BrandFind'
import InfoFind from '../views/InfoFind'
import MilkFind from '../views/MilkFind'
import Test from '../views/Test'

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: "市售羊奶粉",
    component: Index,
    show: true,
    redirect: "/Brand",
    children:[
      {
        path: '/Brand',
        name: '产品信息',
        component: Brand
      },
      {
        path: '/AddBrand',
        name: '添加产品',
        component: AddBrand
      },
      {
        path: '/BrangFind',
        name: '快速查询',
        component: BrandFind
      },

    ],
  },
  {
    path: '/BrandUpdate',
    component: BrandUpdate,
    show: false
  },
  {
    path: "/navigation",
    name: "自检羊奶粉",
    component: Index,
    show: true,
    children:[
      {
        path: '/Info',
        name: '信息查询',
        component: Info
      },
      {
        path: '/AddInfo',
        name: '添加产品',
        component: AddInfo
      },
      {
        path: '/InfoFind',
        name: '快速查询',
        component: InfoFind
      }
    ]
  },
  {
    path: '/InfoUpdate',
    component: InfoUpdate,
    show: false
  },
  {
    path: "/navigation",
    name: "生鲜羊乳",
    component: Index,
    show: true,
    children:[
      {
        path: '/Milk',
        name: '样品信息',
        component: Milk
      },
      {
        path: '/AddMilk',
        name: '添加产品',
        component: AddMilk
      },
      {
        path: '/MilkFind',
        name: '快速查询',
        component: MilkFind
      }
    ]
  },
  {
    path: '/MilkUpdate',
    component: MilkUpdate,
    show: false
  },
  {
    path: "/navigation",
    name: "市销产品",
    component: Index,
    show: true,
    children:[
      {
        path: '/Test',
        name: '产品检测',
        component: Test
      }]
    }
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
