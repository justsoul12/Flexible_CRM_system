import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"
import Pages from 'vite-plugin-pages';


export default defineConfig({
  plugins: [
    react(),
    Pages({

      extensions: ['jsx', 'tsx'], // To include both JSX and TSX
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
