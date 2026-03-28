import { test, expect } from '@playwright/test';

test('homepage matches baseline screenshot', async ({ page }) => {
  await page.goto('/');
  
  // Wait for page to be fully loaded
  await page.waitForLoadState('networkidle');
  
  // Take a full page screenshot and compare against baseline
  await expect(page).toHaveScreenshot('testove_lotoplay.png', { fullPage: true });
});
