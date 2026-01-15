import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'

// Layouts
import DefaultLayout from '@/components/layouts/DefaultLayout.vue'
import AuthLayout from '@/components/layouts/AuthLayout.vue'

// Views
import Login from '@/views/LoginView.vue'
import Home from '@/views/HomeView.vue'
import About from '@/views/AboutView.vue'
import Error from '@/views/ErrorView.vue'
import NotFound from '@/views/NotFoundView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: DefaultLayout,
    children: [
      {
        path: '',
        name: 'home',
        component: Home,
        meta: { requiresAuth: true }, // Trang yêu cầu đăng nhập
      },
      {
        path: 'about',
        name: 'about',
        component: About,
        meta: { requiresAuth: true }, // Trang yêu cầu đăng nhập
      },
    ],
  },
  {
    path: '/auth',
    component: AuthLayout,
    children: [{ path: 'login', name: 'login', component: Login }],
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    component: NotFound,
  },
  {
    path: '/error',
    name: 'error',
    component: Error,
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

// Global Guard: Kiểm tra quyền truy cập trước mỗi lần điều hướng
router.beforeEach((to, from, next) => {
  const accessToken = localStorage.getItem('accessToken')

  if (to.meta.requiresAuth && !accessToken) {
    // Nếu chưa đăng nhập mà vào trang cần quyền -> chuyển hướng login
    next({ name: 'login' })
  } else if (to.path === '/auth/login' && accessToken) {
    // Nếu đã đăng nhập mà truy cập login -> chuyển hướng home
    next({ name: 'home' })
  } else {
    // Cho phép điều hướng
    next()
  }
})

export default router
