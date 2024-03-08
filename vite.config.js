import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: { hmr: { overlay: true } }
  // esbuild: {
  
  //   // Add a loader for JSX files
  //   "loaders": {
  //     '.js': 'jsx',
  //     '.jsx': 'jsx' // Add this line if necessary
  //   }
  // }
})
