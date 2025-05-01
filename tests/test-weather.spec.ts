import { test, expect } from "@playwright/test";
test.describe("Weather Widgets.", () => {
  test("should display current weather conditions", async ({
    page,
    context,
  }) => {
    // Mock geolocation to return a fixed location
    await context.grantPermissions(["geolocation"]);
    await context.setGeolocation({ latitude: 40.7128, longitude: -74.006 });

    await page.goto("/form");

    // Wait for the weather widget to load
    await page.waitForSelector("text=Current Weather", { timeout: 3000 });

    // Check if temperature and wind speed are displayed
    const temperatureText = await page
      .locator("text=Temperature:")
      .last()
      .textContent();
    const windSpeedText = await page
      .locator("text=Wind Speed:")
      .last()
      .textContent();

    expect(temperatureText).toMatch(/Temperature: \d+\.\d+°C/);
    expect(windSpeedText).toMatch(/Wind Speed: \d+(\.\d+)? km\/h/);
  });
});

test.describe("Task List", () => {
  test("should allow adding and deleting tasks", async ({ page }) => {
    await page.goto("/");

    // Add a new task
    await page.fill('input[placeholder="Add a new task"]', "Test Task");
    await page.click("text=Add Task");

    // Verify the task is added
    await expect(page.locator("text=Test Task")).toBeVisible();

    // Delete the task
    await page.click("text=Delete");

    // Verify the task is removed
    await expect(page.locator("text=Test Task")).not.toBeVisible();
  });
});
