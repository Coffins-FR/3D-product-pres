import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
const path = require("path");

// https://vitejs.dev/config/
export default defineConfig({
  publicDir: "public",
  resolve: {
    alias: {
      "@components": `${path.resolve(
        path.join(__dirname, "src", "components")
      )}`,
      "@containers": `${path.resolve(
        path.join(__dirname, "src", "containers")
      )}`,
      "@states": `${path.resolve(path.join(__dirname, "src", "states"))}`,
    },
  },
  plugins: [react()],
});
