import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      asset: path.resolve(__dirname, "./src/assets"),
      Component: path.resolve(__dirname, "./src/Component"),
      constant: path.resolve(__dirname, "./src/constant"),
      Pages: path.resolve(__dirname, "./src/Pages"),
      router: path.resolve(__dirname, "./src/router"),
      service: path.resolve(__dirname, "./src/service"),
      types: path.resolve(__dirname, "./src/types"),
      store: path.resolve(__dirname, './src/store'),
      util: path.resolve(__dirname, "./src/util")
    }
  }
})
