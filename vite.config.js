import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/bellepaints/', // repo name
  plugins: [react()],
})
