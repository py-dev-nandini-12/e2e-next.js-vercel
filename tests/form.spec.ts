import { test, expect } from '@playwright/test';

test('Form submission test', async ({ page }) => {
  await page.goto('/form');
  await page.fill('input', 'Nandini');
  await page.click('button');
  await expect(page.locator('p')).toHaveText('Hello, Nandini!');
});
