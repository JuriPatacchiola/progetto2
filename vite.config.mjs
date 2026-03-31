<reference type="vitest" />
import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";

export default defineConfig({
    plugins: [react()],
    test: {
        globals: true,
        enviroment: "jsdom",
        setupFiles: "./src/setupTests.ts",
        include: ["src/**/*.test.{js,ts,tsx}"],
    },
});
