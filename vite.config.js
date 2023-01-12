import { fileURLToPath, URL } from "node:url"
import { resolve } from 'path'
import { defineConfig } from "vite"
import vue2 from "@vitejs/plugin-vue2"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue2()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
      "~bootstrap": resolve(__dirname, "node_modules/bootstrap")
    }
  }
})
