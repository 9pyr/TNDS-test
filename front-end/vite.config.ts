import { defineConfig as defineConfigVitest } from "vitest/config"
import { defineConfig, mergeConfig } from "vite"
import react from "@vitejs/plugin-react"
import tsconfigPaths from "vite-tsconfig-paths"

// https://vite.dev/config/
export default mergeConfig(
  defineConfigVitest({
    test: {
      globals: true,
      environment: "jsdom",
      setupFiles: "./src/setupTests.ts",
      coverage: {
        reporter: ["text", "json", "html"],
      },
    },
  }),
  defineConfig({
    plugins: [tsconfigPaths(), react()],
    server: {
      port: 3000,
    },
  })
)
