import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  base: '/vue-json-test/', // Reemplaza con el nombre de tu repositorio
  plugins: [vue()]
})