import { test, expect, Page } from '@playwright/test';

test.describe.configure({ mode: 'parallel' });

let sharedPage: Page;

test.beforeAll(async ({ browser }) => {
  const context = await browser.newContext({
    viewport: { width: 1920, height: 1080 }
  });
  sharedPage = await context.newPage();
  await sharedPage.goto('/');
  await sharedPage.waitForLoadState('networkidle');

  // Wait for Google Maps to load (wait for loading placeholder to disappear)
  await sharedPage.waitForSelector('text=Завантаження мапи...', { state: 'hidden', timeout: 10000 });

  // Disable animations/transitions and calculate page height
  const fullHeight = await sharedPage.evaluate(() => {
    const style = document.createElement('style');
    style.innerHTML = `
      *, *::before, *::after {
        animation: none !important;
        transition: none !important;
        animation-duration: 0s !important;
        transition-duration: 0s !important;
      }
      body { overflow: hidden !important; }
    `;
    document.head.appendChild(style);
    return Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);
  });

  // Grow viewport to full height to avoid any scrolling during capture
  await sharedPage.setViewportSize({ width: 1920, height: fullHeight });
});

test.afterAll(async () => {
  if (sharedPage) {
    await sharedPage.close();
  }
});

const screenshotOptions = {
  animations: 'disabled' as const,
  caret: 'hide' as const,
};

test('homepage full page screenshot', async () => {
  await expect(sharedPage).toHaveScreenshot('testove-lotoplay.png', {
    ...screenshotOptions,
    fullPage: true
  });
});

test('header section screenshot', async () => {
  await expect(sharedPage.locator('#header')).toHaveScreenshot('header.png', screenshotOptions);
});

test('hero section screenshot', async () => {
  await expect(sharedPage.locator('#hero')).toHaveScreenshot('hero.png', screenshotOptions);
});

test('concerts section screenshot', async () => {
  await expect(sharedPage.locator('#concerts')).toHaveScreenshot('concerts.png', screenshotOptions);
});

test('members section screenshot', async () => {
  await expect(sharedPage.locator('#gallery')).toHaveScreenshot('gallery.png', screenshotOptions);
});

test('history section screenshot', async () => {
  await expect(sharedPage.locator('#about')).toHaveScreenshot('about.png', screenshotOptions);
});

test('contact section screenshot', async () => {
  await expect(sharedPage.locator('#contact')).toHaveScreenshot('contact.png', {
    ...screenshotOptions,
    mask: [sharedPage.locator('.gm-style')],
  });
});

test('footer section screenshot', async () => {
  await expect(sharedPage.locator('#footer')).toHaveScreenshot('footer.png', screenshotOptions);
});
