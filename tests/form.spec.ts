import { test, expect } from '@playwright/test';

test.describe('Form Submission Tests', () => {
  test('✅ Form submission works correctly', async ({ page }) => {
    await page.goto('/form');

    // Check form elements exist
    await expect(page.locator('input[name="name"]')).toBeVisible();
    await expect(page.locator('input[name="email"]')).toBeVisible();
    await expect(page.locator('button[type="submit"]')).toHaveText('Submit');

    // Fill out the form
    await page.fill('input[name="name"]', 'John Doe');
    await page.fill('input[name="email"]', 'john@example.com');

    // Intentionally fail this expectation
    await expect(page.locator('#message')).toHaveText(`This message does not exist`);
  });

  test('❌ Shows validation error if fields are missing', async ({ page }) => {
    await page.goto('/form');

    // Click submit without filling anything
    await page.click('button[type="submit"]');

    // Expect validation error
    await expect(page.locator('#error')).toHaveText('Both Name and Email are required');
  });

  test('❌ Shows validation error for invalid email', async ({ page }) => {
    await page.goto('/form');

    // Fill in the name field
    await page.fill('input[name="name"]', 'John Doe');
    // Enter an invalid email
    await page.fill('input[name="email"]', 'invalid-email');

    // Submit the form
    await page.click('button[type="submit"]');

    // Expect email validation error
    await expect(page.locator('#error')).toHaveText('Invalid email format');
  });

  test('🔄 Reset button clears the form', async ({ page }) => {
    await page.goto('/form');

    // Fill out the form
    await page.fill('input[name="name"]', 'John Doe');
    await page.fill('input[name="email"]', 'john@example.com');

    // Click reset
    await page.click('button[type="button"]');

    // Expect fields to be cleared
    await expect(page.locator('input[name="name"]')).toHaveValue('');
    await expect(page.locator('input[name="email"]')).toHaveValue('');
  });
});


