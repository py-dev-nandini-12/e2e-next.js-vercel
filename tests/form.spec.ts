import { test, expect } from "@playwright/test";

test.describe("Form Submission Tests", () => {
  test("✅ Form submission works correctly", async ({ page }) => {
    await page.goto("/form");

    // Check form elements exist
    await expect(page.locator('input[name="name"]')).toBeVisible();
    await expect(page.locator('input[name="email"]')).toBeVisible();
    await expect(page.locator('button[type="submit"]')).toHaveText("Submit");

    // Fill out the form
    await page.fill('input[name="name"]', "John Doe");
    await page.fill('input[name="email"]', "john@example.com");

    // Submit the form
    await page.click('button[type="submit"]');

    // Expect success message
    await expect(page.locator("#message")).toHaveText(
      `Hello John Doe, your form has been submitted successfully!`
    );
  });

  test("❌ Shows validation error if fields are missing", async ({ page }) => {
    await page.goto("/form");

    // Click submit without filling anything
    await page.click('button[type="submit"]');

    // Expect validation error
    await expect(page.locator("#error")).toHaveText(
      "Both Name and Email are required"
    );
  });

  test("❌ Shows validation error for invalid email", async ({ page }) => {
    await page.goto("/form");

    // Fill in the name field
    await page.fill('input[name="name"]', "John Doe");
    // Enter an invalid email
    await page.fill('input[name="email"]', "invalid-email");

    // Submit the form
    await page.click('button[type="submit"]');

    // Expect email validation error
    await expect(page.locator("#error")).toHaveText("Invalid email format");
  });

  test("🔄 Reset button clears the form", async ({ page }) => {
    await page.goto("/form");

    // Fill out the form
    await page.fill('input[name="name"]', "John Doe");
    await page.fill('input[name="email"]', "john@example.com");

    // Click reset
    await page.click('button[type="button"]');

    // Expect fields to be cleared
    await expect(page.locator('input[name="name"]')).toHaveValue("");
    await expect(page.locator('input[name="email"]')).toHaveValue("");
  });
});

test.describe("Weather Widget", () => {
  test("should display current weather", async ({ page, context }) => {
    // Mock geolocation to return a fixed location
    await context.grantPermissions(["geolocation"]);
    await context.setGeolocation({ latitude: 40.7128, longitude: -74.006 });

    await page.goto("/form");

    // Wait for the weather widget to load
    await page.waitForSelector("text=Current Weather", { timeout: 5000 });

    // Check if temperature and wind speed are displayed
    const temperature = await page.locator("text=Temperature:").isVisible();
    const windSpeed = await page.locator("text=Wind Speed:").isVisible();

    expect(temperature).toBeTruthy();
    expect(windSpeed).toBeTruthy();
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
