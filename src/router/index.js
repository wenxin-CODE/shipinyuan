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
import login from '../views/login'
import DNA from '../views/DNA'
import AddDNA from '../views/AddDNA'
import DNAFind from '../views/DNAFind'
import DNAUpdate from '../views/DNAUpdate'
import NOSE from '../views/NOSE'
import TONGUE from '../views/TONGUE'

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: "市售羊奶粉",
    component: Index,
    show: true,
    redirect: "/login",
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
        name: '检测信息',
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
    name: "DNA数据",
    component: Index,
    show: true,
    children:[
      {
        path: '/DNA',
        name: 'DNA数据',
        component: DNA
      },
      {
        path: '/AddDNA',
        name: '添加DNA信息',
        component: AddDNA
      },
      {
        path: '/DNAFind',
        name: '快速查询',
        component: DNAFind
      }
    ]
  },
  {
    path: '/DNAUpdate',
    component: DNAUpdate,
    show: false
  },
  {
    path: "/navigation",
    name: "电子鼻、电子舌图谱",
    component: Index,
    show: true,
    children:[
      {
        path: '/NOSE',
        name: '电子鼻图谱',
        component: NOSE
      },
      {
        path: '/TONGUE',
        name: '电子舌图谱',
        component: TONGUE
      }]
  },
  {
    path: "/navigation",
    name: "市销产品",
    component: Index,
    show: true,
    children:[
      {
        path: '/Test',
        name: '产地判断',
        component: Test
      }]
  },
    {
      path: "/login",
      name: "login",
      component:login
      
    }
    ,{
      path: "/register",
      name: "register",
      component: () =>
        import("@/views/register.vue")
    },
    {
      path: "/master",
      name: "master",
      component: () =>
        import("@/views/master.vue")
    },
    {
      path: "/about",
      name: "about",
      component: () =>
        import("@/views/About.vue")
    }
  
]


const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to,from,next)=>
{
  //登录及注册页面可以直接进入,而主页面需要分情况
  if(to.path=='/login')
  {
    next();
    console.log(localStorage.s);
  }
  else if(to.path=='/register')
  {
    next();
  }
  else
  {
    if(from.path=="/login")//从登录页面可以直接通过登录进入主页面
    {
      next();
    }
    else{
    	//从/进入,如果登录状态是true，则直接next进入主页面
	      if(localStorage.s === "true")
		    {
		      next();
		      console.log(localStorage['s'])
		    }
	    else {//如果登录状态是false，那么跳转至登录页面,需要登录才能进入主页面
	      next('/login');
	      console.log("需要登录")
	    }
    }
  }
})


export default router
