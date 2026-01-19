<template>
  <div class="login-form">
    <h2>{{ $t('login.title') }}</h2>
    <form @submit.prevent="handleSubmit">
      <div>
        <label for="username">{{ $t('login.username') }}</label>
        <input
          id="username"
          v-model="account.username"
          type="text"
          :class="{ 'is-invalid': v$.username.$error }"
          @blur="validateField('username')"
        />
        <span v-if="v$.username.$error">{{ v$.username.$errors[0].$message }}</span>
      </div>

      <div>
        <label for="password">{{ $t('login.password') }}</label>
        <input
          id="password"
          v-model="account.password"
          type="password"
          :class="{ 'is-invalid': v$.password.$error }"
          @blur="validateField('password')"
        />
        <span v-if="v$.password.$error">{{ v$.password.$errors[0].$message }}</span>
      </div>

      <button type="submit">
        {{ $t('login.submit') }}
      </button>
    </form>
  </div>
</template>

<script lang="ts" src="./LoginForm.component.ts"></script>

<style>
.is-invalid {
  border-color: red;
}

span {
  color: red;
}
</style>
