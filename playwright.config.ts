import { defineConfig, devices } from '@playwright/test';
export default defineConfig({
  testDir: './e2e-tests',
  webServer: {
    command: 'npm run start',
    url: 'http://localhost:8080',
    timeout: 120 * 1000,
    reuseExistingServer: !process.env.CI,
  },
  use: {
    baseURL: 'http://localhost:8080/',
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
  reporter: 'html',
});