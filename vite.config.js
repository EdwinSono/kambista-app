import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  preview: {
    host: "0.0.0.0",
    port: 8080,
  },
  server: {
    host: "0.0.0.0",
    port: 8080,
  },
  plugins: [vue()],
});
