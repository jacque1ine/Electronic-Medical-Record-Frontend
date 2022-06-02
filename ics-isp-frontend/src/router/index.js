import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import(/* webpackChunkName: "about" */ '../views/Home.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "about" */ '../views/Login.vue')
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
    path: '/patientinfo',
    name: 'patientinfo',
    component: () => import(/* webpackChunkName: "about" */ '../views/PatientInfo.vue')
  }, 
  {
    path: '/newpatient',
    name: 'newpatient',
    component: () => import(/* webpackChunkName: "about" */ '../views/NewPatient.vue')

  },
  {
    path: '/patient-profile/:HCNumber',
    name: 'patientProfile',
    component: () => import(/* webpackChunkName: "about" */ '../views/PatientProfile.vue')
  },
  {
    path: '/patient-details/:HCNumber',
    name: 'patientDetails',
    component: () => import(/* webpackChunkName: "about" */ '../views/PatientDetails.vue')
  },
  {
    path: '/visit-history/:HCNumber',
    name: 'visitHistory',
    component: () => import(/* webpackChunkName: "about" */ '../views/VisitHistory.vue')
  },
  {
    path: '/lab-records',
    name: 'labRecords',
    component: () => import(/* webpackChunkName: "about" */ '../views/LabRecordList.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

