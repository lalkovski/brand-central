import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import viteTsconfigPaths from 'vite-tsconfig-paths'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: 'localhost',
    port: 3000,
  },
  build: {
    sourcemap: true,
    outDir: './build',
  },
  plugins: [react(), viteTsconfigPaths()],
})
