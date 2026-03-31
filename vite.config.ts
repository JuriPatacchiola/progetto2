/// <reference types="vitest" />
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vitest/config'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    // 1. Rende globali expect, describe, it, etc.
    globals: true,
    // 2. Simula l'ambiente browser per React Testing Library
    environment: 'jsdom',
    // 3. Setup per i matcher di jest-dom
    // setupFiles: './src/setupTests.ts',
  },
})