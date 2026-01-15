import { createI18n } from 'vue-i18n'

// Import các file ngôn ngữ
import en from './en.json'
import vi from './vi.json'

// Tạo i18n instance
const i18n = createI18n({
  legacy: false, // Sử dụng Composition API
  locale: localStorage.getItem('lang') || 'vi', // Lấy từ localStorage, mặc định là 'vi'
  fallbackLocale: 'en', // Nếu không tìm thấy ngôn ngữ sẽ fallback về tiếng Anh
  messages: { en, vi },
  missing: (locale, key) => {
    // Trả về giá trị mặc định nếu key không tồn tại trong JSON
    return key
  },
})

export default i18n
