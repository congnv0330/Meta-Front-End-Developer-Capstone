import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./src/setup-tests.js'],
    include: ['./**/*.test.jsx'],
  },
});
