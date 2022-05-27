import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
const path = require("path");

// https://vitejs.dev/config/
export default defineConfig({
  publicDir: "public",
  resolve: {
    alias: {
      "@": `${path.resolve(__dirname, "/src")}/`,
    },
  },
  plugins: [react()],
});
