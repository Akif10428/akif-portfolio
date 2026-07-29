import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// GitHub Pages project site: https://Akif10428.github.io/akif-portfolio/
export default defineConfig({
  plugins: [react()],
  base: '/akif-portfolio/',
})
