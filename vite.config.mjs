/// <reference types="vitest" />
import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";

export default defineConfig({
    plugins: [react()],
    test: {
        globals: true,
        // Corretto: environment con la "n"
        environment: "jsdom",
        setupFiles: "./src/setupTests.ts",
        include: ["src/**/*.test.{js,ts,tsx}"],
    },
});