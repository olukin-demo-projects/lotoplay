import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');
    // Hide scrollbar to avoid diffs from scroll position if any
    await page.addStyleTag({ content: 'body { overflow: hidden !important; }' });
});

test.describe('Section Screenshots', () => {
    test('header section matches baseline', async ({ page }) => {
        await expect(page.locator('#header')).toHaveScreenshot('header.png');
    });

    test('hero section matches baseline', async ({ page }) => {
        await expect(page.locator('#hero')).toHaveScreenshot('hero.png');
    });

    test('concerts section matches baseline', async ({ page }) => {
        await expect(page.locator('#concerts')).toHaveScreenshot('concerts.png');
    });

    test('members section matches baseline', async ({ page }) => {
        await expect(page.locator('#gallery')).toHaveScreenshot('gallery.png');
    });

    test('history section matches baseline', async ({ page }) => {
        await expect(page.locator('#about')).toHaveScreenshot('about.png');
    });

    test('contact section matches baseline', async ({ page }) => {
        // Maps can be tricky, we might need to mask it or wait more
        await expect(page.locator('#contact')).toHaveScreenshot('contact.png', {
            mask: [page.locator('.gm-style')], // Mask Google Map to avoid tile loading diffs
        });
    });

    test('footer section matches baseline', async ({ page }) => {
        await expect(page.locator('#footer')).toHaveScreenshot('footer.png');
    });
});
