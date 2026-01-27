import axios from 'axios'
import router from '@/router'
import { HttpStatusCode } from 'axios'

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL

const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000, // 10 giây
  headers: {
    'Content-Type': 'application/json',
  },
})

// Interceptor thêm token vào request (nếu có)
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('access_token') // Lấy token từ localStorage
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  (error) => Promise.reject(error),
)

// Interceptor xử lý lỗi response
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response) {
      const { status } = error.response

      if (status === HttpStatusCode.InternalServerError || status === HttpStatusCode.NotFound) {
        router.push(`/error?code=${status}`) // Chuyển sang trang lỗi
      }

      // 400 - BadRequest (Ví dụ lỗi validate) -> Trả về nơi gọi API xử lý
      if (status === HttpStatusCode.BadRequest) {
        return Promise.reject(error)
      }
    }

    return Promise.reject(error)
  },
)

export default api
