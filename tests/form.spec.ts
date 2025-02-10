import { test, expect } from '@playwright/test';

test('Form submission works correctly', async ({ page }) => {
  await page.goto('/form');

  // Ensure form elements are present
  await expect(page.locator('input[placeholder="Enter your name"]')).toBeVisible();
  await expect(page.locator('input[placeholder="Enter your email"]')).toBeVisible();
  await expect(page.locator('button[type="submit"]')).toHaveText('Submit');

  // Fill out the form
  await page.fill('input[placeholder="Enter your name"]', 'John Doe');
  await page.fill('input[placeholder="Enter your email"]', 'john@example.com');

  // Submit the form
  await page.click('button[type="submit"]');

  // Wait for success message
  await expect(page.locator('p')).toHaveText('Thank you, John Doe!');
});

test('Shows validation error if fields are missing', async ({ page }) => {
  await page.goto('/form');

  // Try to submit without filling anything
  await page.click('button[type="submit"]');

  // Expect an error message
  await expect(page.locator('p')).toHaveText('Submission failed. Please try again.');
});

