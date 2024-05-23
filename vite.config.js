import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/TierraVet-project-frontend-7/',
  plugins: [react()],
})
