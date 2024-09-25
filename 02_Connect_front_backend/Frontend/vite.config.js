import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server :{
    proxy : {
      '/api' : 'http://localhost:3000' //this will append http://localhost:3000 before /api anywhere used and will provide proxy that request will go from localhost:3000
    },
  },
  plugins: [react()],
})
