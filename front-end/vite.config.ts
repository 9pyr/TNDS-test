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
      setupFiles: "./test/setupTests.ts",
      coverage: {
        reporter: ["text"],
        include: ["src/**/*"],
        exclude: [
          "**/types.ts",
          "**/styled.ts",
          "**/vite-env.d.ts",
          "node_modules",
          "dist",
          "coverage",
          "build",
        ],
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
