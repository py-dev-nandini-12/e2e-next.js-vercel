import { test, expect } from '@playwright/test';

test.describe('Form Submission Tests', () => {
  test('✅ Form submission works correctly', async ({ page }) => {
    await page.goto('/form');

    // Check form elements exist
    await expect(page.locator('input[name="name"]')).toBeVisible();
    await expect(page.locator('input[name="email"]')).toBeVisible();
    await expect(page.locator('input[name="phone"]')).toBeVisible();
    await expect(page.locator('button[type="submit"]')).toHaveText('Submit');

    // Fill out the form
    await page.fill('input[name="name"]', 'John Doe');
    await page.fill('input[name="email"]', 'john@example.com');
    await page.fill('input[name="phone"]', '1234567890');

    // Submit the form
    await page.click('button[type="submit"]');

    // Expect success message
    await expect(page.locator('#message')).toHaveText(`✅ Hello John Doe, your form has been submitted successfully!`);
  });

  test('❌ Shows validation error if fields are missing', async ({ page }) => {
    await page.goto('/form');

    // Click submit without filling anything
    await page.click('button[type="submit"]');

    // Expect validation error
    await expect(page.locator('#error')).toHaveText('All fields are required');
  });

  test('❌ Shows validation error for invalid email', async ({ page }) => {
    await page.goto('/form');

    await page.fill('input[name="name"]', 'John Doe');
    await page.fill('input[name="email"]', 'invalid-email');
    await page.fill('input[name="phone"]', '1234567890');

    await page.click('button[type="submit"]');

    await expect(page.locator('#error')).toHaveText('Invalid email format');
  });

  test('❌ Shows validation error for invalid phone number', async ({ page }) => {
    await page.goto('/form');

    await page.fill('input[name="name"]', 'John Doe');
    await page.fill('input[name="email"]', 'john@example.com');
    await page.fill('input[name="phone"]', '98765');

    await page.click('button[type="submit"]');

    await expect(page.locator('#error')).toHaveText('Phone number must be exactly 10 digits');
  });

  test('🔄 Reset button clears the form', async ({ page }) => {
    await page.goto('/form');

    await page.fill('input[name="name"]', 'John Doe');
    await page.fill('input[name="email"]', 'john@example.com');
    await page.fill('input[name="phone"]', '1234567890');

    await page.click('button[type="button"]');

    await expect(page.locator('input[name="name"]')).toHaveValue('');
    await expect(page.locator('input[name="email"]')).toHaveValue('');
    await expect(page.locator('input[name="phone"]')).toHaveValue('');
  });
});
