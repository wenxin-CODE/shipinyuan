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

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: "品牌",
    component: Index,
    show: true,
    redirect: "/Brand",
    children:[
      {
        path: '/Brand',
        name: '品牌查询',
        component: Brand
      },
      {
        path: '/AddBrand',
        name: '添加品牌',
        component: AddBrand
      }

    ],
  },
  {
    path: '/BrandUpdate',
    component: BrandUpdate,
    show: false
  },
  {
    path: "/navigation",
    name: "省内外",
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
        name: '添加信息',
        component: AddInfo
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
    name: "银桥",
    component: Index,
    show: true,
    children:[
      {
        path: '/Milk',
        name: '牛奶信息',
        component: Milk
      },
      {
        path: '/AddMilk',
        name: '添加奶粉',
        component: AddMilk
      }
    ]
  },
  {
    path: '/MilkUpdate',
    component: MilkUpdate,
    show: false
  },
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
