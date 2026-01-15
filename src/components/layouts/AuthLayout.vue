<script setup lang="ts"></script>

<template>
  <div class="auth-container">
    <h1>Auth Layout</h1>
    <router-view />
  </div>
</template>

<style scoped>
.auth-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
}
</style>
