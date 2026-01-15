<script setup lang="ts">
import { useRoute } from 'vue-router'

const route = useRoute()
const errorCode = route.query.code || 'Unknown Error'
</script>

<template>
  <div class="error-page">
    <h1>Error {{ errorCode }}</h1>
    <p>Something went wrong. Please try again later.</p>
    <router-link to="/">Go back home</router-link>
  </div>
</template>

<style scoped>
.error-page {
  text-align: center;
  margin-top: 50px;
}
</style>
