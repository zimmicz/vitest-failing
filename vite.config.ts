/// <reference types="vitest" />

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import viteTsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  test: {
    globals: true,
  },
  server: {
    host: "0.0.0.0",
    port: 3010,
  },
  plugins: [react(), viteTsconfigPaths()],
});
