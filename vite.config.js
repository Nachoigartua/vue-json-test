import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  base: '/vue-json-test/', // ⚠️ Cambiá esto por el nombre real de tu repo
  plugins: [vue()]
})
