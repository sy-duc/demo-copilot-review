![alt text](logo-vue.png 'Vue')

# Project Base Setup

## Introduction

📂 With the aim of building a Vue.js Base project framework that is ready for use in an enterprise environment.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Technology Stack and Features

- 🚀 Vue 3 (Composition API) + Vite + TypeScript
- 🖌️ ESLint + Prettier
- 🛠️ Vue Router config
- 💾 Implement State Management with Pinia (loading when fetching api)
- 🧰 Demo Axios Service Layer
- 🌍 Implement multilingual (i18n)
- ✅ Validate form with Vuelidate (use composable useValidate)
- ⚠️ Handle Global Error
- 🔍 Implement sample Helpers & Utils

## Project Structure

```
.
├── src
│   ├── api              // Axios Service Layer
│   ├── assets           // Static assets (css, image, ...)
│   ├── components       // Vue components common
│   ├── composables      // Vue composables (hooks)
│   ├── i18n             // Internationalization
│   ├── router           // Vue Router configuration & Navigation Guard
│   ├── stores           // State Management with Pinia
│   ├── utils            // Include helpers, constants, enums, types, intefaces, ...
│   └── views            // Page components
.
.
.
```

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
