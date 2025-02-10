// import { test, expect } from '@playwright/test';

// test('Form submission works correctly', async ({ page }) => {
//   await page.goto('/form');

//   // Ensure form elements are present
//   await expect(page.locator('input[placeholder="Enter your name"]')).toBeVisible();
//   await expect(page.locator('input[placeholder="Enter your email"]')).toBeVisible();
//   await expect(page.locator('button[type="submit"]')).toHaveText('Submit');

//   // Fill out the form
//   await page.fill('input[placeholder="Enter your name"]', 'John Doe');
//   await page.fill('input[placeholder="Enter your email"]', 'john@example.com');

//   // Submit the form
//   await page.click('button[type="submit"]');

//   // Wait for success message
//   await expect(page.locator('p')).toHaveText('Thank you, John Doe!');
// });

// test('Shows validation error if fields are missing', async ({ page }) => {
//   await page.goto('/form');

//   // Try to submit without filling anything
//   await page.click('button[type="submit"]');

//   // Expect an error message
//   await expect(page.locator('p')).toHaveText('Submission failed. Please try again.');
// });

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

    // Submit the form
    await page.click('button[type="submit"]');

    // Expect success message
    await expect(page.locator('#message')).toHaveText(`Hello John Doe, your form has been submitted successfully!`);
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
