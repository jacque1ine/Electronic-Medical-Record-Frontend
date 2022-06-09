import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/home',
    name: 'home',
    component: () => import(/* webpackChunkName: "about" */ '../views/Home.vue')
  },
  {
    path: '/',
    name: 'login',
    component: () => import(/* webpackChunkName: "about" */ '../views/Login.vue'),
    meta: {
      hideNavbar: true,
     }
  }, 
  {
    path: '/calendar',
    name: 'calendar',
    component: () => import(/* webpackChunkName: "about" */ '../views/CalendarView.vue')
  }, 
  {
    path: '/search',
    name: 'search',
    component: () => import(/* webpackChunkName: "about" */ '../views/Search.vue')
  },
  {
    path: '/patients',
    name: 'all_patients',
    component: () => import(/* webpackChunkName: "about" */ '../views/patient/ListAll.vue')
  },
  {
    path: '/patient/new',
    name: 'new_patient',
    component: () => import(/* webpackChunkName: "about" */ '../views/patient/New.vue')

  },
  {
    path: '/patient/details/:HCNumber',
    name: 'patientDetails',
    component: () => import(/* webpackChunkName: "about" */ '../views/patient/Details.vue')
  },
  {
    path: '/visit-history/:HCNumber',
    name: 'visitHistory',
    component: () => import(/* webpackChunkName: "about" */ '../views/VisitHistory.vue')
  },
  {
    path: '/lab-records',
    name: 'lab_records',
    component: () => import(/* webpackChunkName: "about" */ '../views/lab-records/Recent.vue')
  },
  {
    path: '/lab-records/create',
    name: 'create_lab_record',
    component: () => import(/* webpackChunkName: "about" */ '../views/lab-records/Create.vue')
  },
  {
    path: '/lab-records/edit/:id',
    name: 'edit_lab_record',
    component: () => import(/* webpackChunkName: "about" */ '../views/lab-records/Edit.vue')
  },
  {
    path: '/visit-reports',
    name: 'visit_reports',
    component: () => import(/* webpackChunkName: "about" */ '../views/visit-reports/All.vue')
  },
  {
    path: '/visit-reports/create',
    name: 'create_visit_report',
    component: () => import(/* webpackChunkName: "about" */ '../views/visit-reports/New.vue')
  },
  {
    path: '/visit-reports/view/:id',
    name: 'edit_lab_report',
    component: () => import(/* webpackChunkName: "about" */ '../views/visit-reports/View.vue')
  },
  
  {
    path: '/staff',
    name: 'all_staff',
    component: () => import(/* webpackChunkName: "about" */ '../views/user/AllUsers.vue')
  }, 

  {
    path: '/staff/new',
    name: 'new_staff',
    component: () => import(/* webpackChunkName: "about" */ '../views/user/NewUser.vue')
  },

  {
    path: '/test',
    name: 'test',
    component: () => import(/*webpackChunkName: "about" */ '../components/Calendar.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

