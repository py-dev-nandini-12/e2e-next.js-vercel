import { defineConfig } from "@playwright/test";

export default defineConfig({
  webServer: {
    command: "npm run dev",
    port: 3000,
    reuseExistingServer: true,
  },
  workers: 4, // Specify the number of workers
  reporter: [["list"], ["html", { outputFolder: "playwright-report" }]],
});
