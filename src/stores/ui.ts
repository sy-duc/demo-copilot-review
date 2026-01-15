import { defineStore } from 'pinia'

export const useUIStore = defineStore('ui', {
  state: () => ({
    isLoading: false,
    language: localStorage.getItem('language') || 'en', // Lấy ngôn ngữ từ localStorage
  }),

  actions: {
    // Xử lý loading
    setLoading(status: boolean) {
      this.isLoading = status
    },

    // Xử lý đa ngôn ngữ
    setLanguage(lang: string) {
      this.language = lang
      localStorage.setItem('lang', lang) // Lưu vào localStorage khi muốn xử lý reload trang mà vẫn giữ ngôn ngữ đã chọn trước đó
    },
  },
})
