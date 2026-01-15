<template>
  <div>
    <header>
      <h1>My App</h1>
      <nav>
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link>
      </nav>
      <button @click="changeLang('vi')">🇻🇳 Tiếng Việt</button>
      <button @click="changeLang('en')">🇺🇸 English</button>
    </header>

    <main>
      <router-view />
    </main>

    <footer>
      <p>© 2025 My App</p>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { useUIStore } from '@/stores/ui'

const { locale } = useI18n()
const uiStore = useUIStore()

const changeLang = (lang: string) => {
  uiStore.setLanguage(lang) // Lưu ngôn ngữ vào store và localStorage
  locale.value = lang // Cập nhật ngôn ngữ của Vue I18n
}
</script>
