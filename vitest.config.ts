//1
import {defineConfig} from "vitest/config";

// 1
export default defineConfig({
  // 1
  test: {
    environment: "jsdom", // 1
    globals: true,
    setupFiles: "tests/setup.ts"
  }
});