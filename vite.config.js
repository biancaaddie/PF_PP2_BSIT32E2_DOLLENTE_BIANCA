import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/PF_PP2_BSIT32E2_DOLLENTE_BIANCA/',
  plugins: [react()],
  build: {
    outDir: 'docs',
  },
})